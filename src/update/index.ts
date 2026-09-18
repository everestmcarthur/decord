import { exists, mkdir, rm } from "node:fs/promises";
import { type Channel, type ChannelContext, channels, setChannel } from "./channel";
import { log, makeProgress, wrapPromise } from "./progress";
import { runTasks } from "./runner";
import { type apkSplits, force, isMock, trackerUserAgent } from "./shared";
import { handleShellErr, join } from "./utils";

const tracker = await fetch("https://tracker.vendetta.rocks/tracker/index", {
	headers: {
		"User-Agent": trackerUserAgent,
	},
});
if (!tracker.ok || tracker.status !== 200) throw new Error("Failed to get version from tracker!");

const { latest } = (await tracker.json()) as { latest: Record<Channel, number> };

async function downloadApks(channel: ChannelContext) {
	const cdnUrl = `https://tracker.vendetta.rocks/tracker/download/${channel.version}/`;

	const mediaFiles = Bun.$.braces("res/**/*.{png,jpg,lottie}");
	const apkAssets = {
		base: ["assets/index.android.bundle", ...mediaFiles],
		"config.hdpi": mediaFiles,
		"config.xxhdpi": mediaFiles,
	} satisfies Record<(typeof apkSplits)[number], string[]>;

	let reuseFolder = isMock;
	if (!reuseFolder) {
		const matches = await Bun.file(join(channel.workFolder, "ver"))
			.text()
			.then((x) => x === channel.version)
			.catch(() => false);
		if (matches) {
			const exist = await Promise.allSettled(
				Object.keys(apkAssets).map((folder) => exists(join(channel.apksFolder, folder, "res"))),
			);
			if (exist.every((x) => x.status === "fulfilled" && x.value)) reuseFolder = true;
		}
	}

	if (!reuseFolder) await rm(channel.workFolder, { force: true, recursive: true });
	if (!(await exists(channel.apksFolder))) await mkdir(channel.apksFolder, { recursive: true });

	if (!reuseFolder) {
		log("Downloading & extracting APKs...");

		const apkProgress = makeProgress(Object.fromEntries(Object.keys(apkAssets).map((apk) => [apk, `${apk}.apk`])));

		await Promise.allSettled(
			Object.entries(apkAssets).map(([apk, assets]) =>
				wrapPromise(
					(async () => {
						const dest = join(channel.workFolder, `${apk}.zip`);
						const pattern = assets.map((file) => Bun.$.escape(file)).join(" ");

						for (let attempt = 1; ; attempt++) {
							try {
								const res = await fetch(cdnUrl + apk, {
									headers: {
										"User-Agent": trackerUserAgent,
										"Cache-Control": "public, max-age=3600",
									},
								});
								if (!res.ok) throw new Error(`HTTP ${res.status}`);
								const expected = Number(res.headers.get("content-length") ?? NaN);
								const data = await res.arrayBuffer();
								if (!Number.isNaN(expected) && expected > 0 && data.byteLength !== expected)
									throw new Error(`truncated download: expected ${expected} bytes, got ${data.byteLength}`);
								await Bun.write(dest, data);

const out = await Bun.$`unzip -o ${dest} ${{ raw: pattern }} -d ${join(channel.apksFolder, apk)}`
								.quiet()
								.nothrow();
								if (out.exitCode !== 0 && out.exitCode !== 11)
									throw new Error(out.stderr.toString().trim() || `unzip failed (exit code ${out.exitCode})`);
								return;
							} catch (e) {
								await rm(dest, { force: true }).catch(() => {});
								if (attempt >= 3) throw e;
								log(`⚠ ${apk}.apk attempt ${attempt} failed, retrying...`);
								await Bun.sleep(5000);
							}
						}
					})(),
					apkProgress,
					apk,
				),
			),
		);

		if (apkProgress.anyFailed()) throw new Error(`Failed to download all APKs!\n${apkProgress.prettyErrors()}`);

		await Bun.write(join(channel.workFolder, "ver"), channel.version);
	} else log("Reusing folder!");
}

async function resetRepos() {
	for (const ch of channels) await rm(join("../data", `.update-ok-${ch}`), { force: true }).catch(() => {});
	for (const cwd of ["../data", "../canvas"] as const) {
		await Bun.$`git reset --hard`.cwd(cwd).nothrow().quiet().then(handleShellErr);
		await Bun.$`git restore --staged .`
			.cwd(cwd)
			.nothrow()
			.quiet()
			.catch(() => {});
	}
}

async function processChannel(channelName: Channel, targetVersion: string) {
	const channel = setChannel(channelName, targetVersion);
	log(`\n${"═".repeat(30)}\n${channel.channel}: ${channel.version}\n${"═".repeat(30)}`);

	try {
		await downloadApks(channel);
		await runTasks(channel);
		await Bun.write(join("../data", `.update-ok-${channel.channel}`), channel.version);
	} finally {
		await rm(channel.workFolder, { force: true, recursive: true }).catch(() => {});
	}
}

if (!isMock) {
	await resetRepos();

	for (const channelName of channels) {
		const targetVersion = latest[channelName].toString();
		const local = await Bun.file(join("../data", channelName, "version.txt"))
			.text()
			.catch(() => "");
		if (!force && local === targetVersion) {
			log(`${channelName}: up to date (${targetVersion})`);
			continue;
		}
		await processChannel(channelName, targetVersion);
	}
} else {
	for (const channelName of channels) {
		const version =
			(await Bun.file(join("../data", channelName, "version.txt"))
				.text()
				.catch(() => "0")) || "0";
		await runTasks(setChannel(channelName, version));
	}
}

log("\n✅ Done");
