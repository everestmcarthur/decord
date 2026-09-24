import { copyFile, mkdir, readdir, rename } from "node:fs/promises";
import { basename } from "node:path";
import type { Icons } from "../../types";
import type { ChannelContext } from "../channel";
import { commit } from "../git";
import type { Progress } from "../progress";
import { apkSplits } from "../shared";
import { discordPath, join, listRequiredDirs, sortObj } from "../utils";
import { exists } from "node:fs/promises";

const singleLineAssetRegex = /\.registerAsset\((\{.+?\})\)/;

export async function parseAssets(channel: ChannelContext, code: string[] | string) {
	const retrievedAssets: {
		httpServerLocation: string;
		width: number;
		height: number;
		scales: number[];
		hash: string;
		name: string;
		type: "png" | "svg" | "lottie";
	}[] = [];

	const lines = Array.isArray(code) ? code : code.split("\n");

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		if (!line.includes(".registerAsset")) continue;

		// Pattern 1: Modern single-line format (hermes-decomp / Rust)
		const singleMatch = line.match(singleLineAssetRegex);
		if (singleMatch) {
			try {
				const fn = new Function(`return (${singleMatch[1]})`);
				const info = fn();
				if (
					info &&
					["httpServerLocation", "hash", "name", "type"].every((x) => x in info) &&
					["svg", "png", "lottie"].includes(info.type) &&
					!info.httpServerLocation.includes("node_modules/.pnpm")
				) {
					retrievedAssets.push(info);
					continue;
				}
			} catch {}
		}

		// Pattern 2: Legacy multi-line format
		const infoLine = lines[i + 1];
		const scalesLine = lines[i + 2];
		if (infoLine?.includes("'httpServerLocation'") && scalesLine?.includes("[")) {
			try {
				const infoText = infoLine.match(/({.+?})/)?.[1];
				const scalesText = scalesLine.match(/(\[.+?\])/)?.[1];
				if (infoText && scalesText) {
					const info = new Function(`return (${infoText})`)();
					const scales = new Function(`return (${scalesText})`)();
					if (info && typeof info === "object" && Array.isArray(scales)) {
						info.scales = scales;
						if (
							["httpServerLocation", "hash", "name", "type"].every((x) => x in info) &&
							["svg", "png", "lottie"].includes(info.type) &&
							!info.httpServerLocation.includes("node_modules/.pnpm")
						) {
							retrievedAssets.push(info);
						}
					}
				}
			} catch {}
		}
	}

	const apkPaths = new Map<string, string>();
	for (const split of apkSplits) {
		const folder = join(channel.apksFolder, split);
		if (await exists(folder)) {
			try {
				for (const path of await readdir(folder, { recursive: true })) {
					apkPaths.set(basename(path), join(folder, path));
				}
			} catch {}
		}
	}

	const iconsDir = join(channel.canvasDir, "icons");

	const icons: Icons = {};
	const toCopy: { from: string; to: string }[] = [];
	for (const asset of retrievedAssets) {
		const baseName = [...asset.httpServerLocation.split("/").slice(2), asset.name]
			.join("_")
			.toLowerCase()
			.replace(/\W+/g, "");
		const path = `${baseName}.${asset.type}`;

		const apkPath = apkPaths.get(path);
		if (apkPath) {
			const realPath = join(
				discordPath(asset.httpServerLocation.split("/").slice(2).join("/")),
				`${asset.name}.${asset.type}`,
			);

			icons[asset.name] = {
				file: realPath,
				hash: asset.hash,
				scales: asset.scales,
				width: asset.width ?? null,
				height: asset.height ?? null,
			};
			toCopy.push({
				from: apkPath,
				to: join(iconsDir, realPath),
			});
		}
	}

	return { icons, toCopy };
}

export default async function icons(channel: ChannelContext, progress: Progress, code: string[] | string) {
	progress.start("icons_getting");

	const { icons, toCopy } = await parseAssets(channel, code);
	await Bun.write(join(channel.canvasDir, "icons.json"), JSON.stringify(sortObj(icons), undefined, 4));
	progress.update("icons_getting", true);

	progress.start("icons_copying");

	const iconsDir = join(channel.canvasDir, "icons");
	const oldIconsDir = join(channel.canvasDir, "oldicons");
	await rename(iconsDir, oldIconsDir).catch(() => {});
	const dirs = listRequiredDirs(toCopy.map((x) => x.to));

	await Promise.all(dirs.map((dir) => mkdir(dir, { recursive: true })));

	// Batch file copying in chunks of 50 to avoid file descriptor starvation or timeouts
	const BATCH_SIZE = 50;
	for (let i = 0; i < toCopy.length; i += BATCH_SIZE) {
		const batch = toCopy.slice(i, i + BATCH_SIZE);
		await Promise.all(
			batch.map(async ({ from, to }) => {
				try {
					if (await exists(from)) {
						await copyFile(from, to);
					}
				} catch {}
			}),
		);
	}

	await commit(["icons.json", "icons"], `chore: update icons for ${channel.cuteVersion}`, channel.canvasDir);
	progress.update("icons_copying", true);
}
