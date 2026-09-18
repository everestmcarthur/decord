export const trackerUserAgent = "Themelings <https://github.com/nexpid/Themelings/>";
export const maxDiffChanges = 20;

export const apkSplits = ["base", "config.hdpi", "config.xxhdpi"] as const;

export const oprevFiles = ["source.jsonl", "raw.json", "semantic.json", "semantic_simple.json", "icons.json"] as const;
export const prevFiles = new Map<(typeof oprevFiles)[number], ArrayBuffer>();

export const force = process.argv.includes("--force");
export const isMock = process.argv.includes("--mock");
export const diffAnyway = process.argv.includes("--diff-anyway");
export const commitAnyway = process.argv.includes("--commit-anyway");
export const isQuiet = process.argv.includes("--quiet");
