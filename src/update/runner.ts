import type { ChannelContext } from "./channel";
import { commit } from "./git";
import { log, makeProgress, wrapPromise } from "./progress";
import { isMock } from "./shared";
import codeTask from "./tasks/code";
import colorsTask from "./tasks/colors";
import decompile from "./tasks/decompile";
import { formatError, join } from "./utils";

export async function runTasks(channel: ChannelContext) {
	log(`\nRunning tasks for ${channel.cuteVersion}...`);
	const progress = makeProgress(
		{
			decompile: "Decompilation",
			decompile_downloading: "Downloading decompiler",
			decompile_decompiling: "Decompiling index.android.bundle",
			decompile_gzip: "Compressing code",
			code: "Code parser",
			code_getting: "Finding file imports",
			code_remaking: "Recreating code",
			code_pushing: "Committing source",
			colors: "Colors",
			colors_getting: "Extracting colors",
			colors_pushing: "Committing colors",
			icons: "Icon parser",
			icons_getting: "Writing icons.json",
			icons_copying: "Copying images",
		},
		true,
	);

	let gzipDone: Promise<void> | undefined;

	if (!isMock) {
		try {
			gzipDone = (await wrapPromise(
				decompile(channel, progress, join(channel.apksFolder, "base", "assets", "index.android.bundle")),
				progress,
				"decompile",
			)) as Promise<void> | undefined;
		} catch (e) {
			const detail = (formatError(e) || String(e)).split("\n")[0];
			console.warn(
				`\nDecompile failed or timed out (${detail}).` +
					`\nSkipping ${channel.channel} for this release so the next run can retry.\n`,
			);
			return;
		}

		await Bun.write(join(channel.dataDir, "version.txt"), channel.version);
		await Bun.write(join(channel.canvasDir, "version.txt"), channel.version).catch(() => {});

		const code = (await Bun.file(channel.codePath).text()).replace(/\r/g, "").split("\n");

		await wrapPromise(codeTask(channel, progress, code), progress, "code");
		if (progress.someFailed("code")) throw new Error(`Failed at parser tasks!\n${progress.prettyErrors("code")}`);
		// colors is non-critical, run in background
		wrapPromise(colorsTask(channel, code), progress, "colors").catch((e) => {
			progress.update("colors", false, String(e));
			console.warn("Colors task failed (non-critical):", e);
		});
		// icons disabled for now (6h hang due to parseAssets), will be fixed separately
		// wrapPromise(iconsTask(progress, code), progress, "icons").catch((e) => {
		// 	progress.update("icons", false, String(e));
		// 	console.warn("Icons task failed (non-critical):", e);
		// });
		progress.update("icons", null);

		if (gzipDone) {
			try {
				await gzipDone;
			} catch (e) {
				if (progress.someFailed("decompile_gzip"))
					throw new Error(`Failed at the decompile gzip task!\n${progress.prettyErrors("decompile_gzip")}`);
				throw e;
			}
		}

		if (progress.someFailed("decompile_gzip"))
			throw new Error(`Failed at the decompile gzip task!\n${progress.prettyErrors("decompile_gzip")}`);
	}

	await commit(["version.txt"], `chore: bump app version to ${channel.cuteVersion}`, channel.dataDir);
	// canvas version bump (if canvas checkout exists)
	try {
		await commit(["version.txt"], `chore: bump app version to ${channel.cuteVersion}`, channel.canvasDir);
	} catch {}
}
