export const trackerUserAgent = "Themelings <https://github.com/nexpid/Themelings/>";

export const apkSplits = ["base", "config.hdpi", "config.xxhdpi"] as const;

export const force = process.argv.includes("--force");
export const isMock = process.argv.includes("--mock");
export const commitAnyway = process.argv.includes("--commit-anyway");
