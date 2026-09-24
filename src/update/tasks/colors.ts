import Color, { type ColorInstance } from "color";
import type { RawColors, SemanticColors } from "../../types";
import type { ChannelContext } from "../channel";
import { commit } from "../git";
import { join, sortObj } from "../utils";

function hex(color: ColorInstance) {
	return (color.alpha() === 1 ? color.hex() : color.hexa()).toLowerCase();
}

function findModuleSnippet(code: string[] | string, importPath: string): string | null {
	const text = Array.isArray(code) ? code.join("\n") : code;
	const targetIdx = text.indexOf(importPath);
	if (targetIdx === -1) return null;
	const startIdx = text.lastIndexOf("// === Module ", targetIdx);
	const fromIdx = startIdx === -1 ? 0 : startIdx;
	const nextIdx = text.indexOf("// === Module ", targetIdx + importPath.length);
	const toIdx = nextIdx === -1 ? text.length : nextIdx;
	return text.slice(fromIdx, toIdx);
}

function evalRawModule(snippet: string): any {
	let code = snippet.replace(/^import.*$/gm, "");
	const preamble = `
		const size = { fileFinishedImporting: () => {} };
		const set = size;
	\n`;
	code = preamble + code;
	code = code.replace(/export\s+(?:const|var|let)\s+_private/, "const _private");
	code = code + "\nreturn _private;";
	try {
		const fn = new Function(code);
		const result = fn();
		if (!result || typeof result !== "object" || !result.RawColors || typeof result.RawColors !== "object") {
			throw new Error("RawColors object not found in evaluated module.");
		}
		return result;
	} catch (e: any) {
		throw new Error(
			`VM evaluation failed for RawColors: ${e.message}. Decompiler output may have changed structure.`,
		);
	}
}

function evalSemanticModule(snippet: string): any {
	let code = snippet.replace(/^import.*$/gm, "");
	const preamble = `
		const size = { fileFinishedImporting: () => {} };
		const set = size;
		const ThemeTypes = { _private: { Themes: new Proxy({}, { get(_, k) { return k.toString().toLowerCase(); } }) } };
		const items = ThemeTypes;
	\n`;
	code = preamble + code;
	code = code.replace(/export\s+(?:const|var|let)\s+_private/, "const _private");
	code = code + "\nreturn _private;";
	try {
		const fn = new Function(code);
		const result = fn();
		if (!result || typeof result !== "object" || !result.SemanticColors || typeof result.SemanticColors !== "object") {
			throw new Error("SemanticColors object not found in evaluated module.");
		}
		return result;
	} catch (e: any) {
		throw new Error(
			`VM evaluation failed for SemanticColors: ${e.message}. Decompiler output may have changed structure.`,
		);
	}
}

export function getInternalRawColors(code: string[] | string) {
	const snippet = findModuleSnippet(code, "raw-color-definitions.tsx");
	if (!snippet) throw new Error("Cannot find raw-color-definitions module");
	const mod = evalRawModule(snippet);
	const raw: RawColors = {};
	for (const [key, color] of Object.entries(mod.RawColors as Record<string, string>)) {
		raw[key] = hex(Color(color as string));
	}
	return raw;
}

export function getInternalSemanticColors(code: string[] | string, raw: Record<string, string>) {
	const snippet = findModuleSnippet(code, "native/generated-definitions");
	if (!snippet) throw new Error("Cannot find semantic definitions module");
	const mod = evalSemanticModule(snippet);
	const semantic: SemanticColors = {};
	for (const [key, colors] of Object.entries(
		mod.SemanticColors as Record<string, Record<string, { raw: string; opacity: number }>>,
	)) {
		const color: SemanticColors[string] = {};
		for (const [theme, val] of Object.entries(colors)) {
			if (typeof val !== "object" || !("raw" in val)) continue;
			color[theme] = [hex(Color(raw[val.raw]).alpha(val.opacity)), { raw: val.raw, opacity: val.opacity }];
		}
		semantic[key] = color;
	}
	return semantic;
}

export function convertSimpleSemantic(semantic: SemanticColors) {
	const simpleSemantic: Record<string, Record<string, string>> = {};
	for (const [key, colors] of Object.entries(semantic)) {
		const color: Record<string, string> = {};
		for (const [theme, [clr]] of Object.entries(colors)) color[theme] = clr;
		simpleSemantic[key] = color;
	}
	return simpleSemantic;
}

export default async function colors(channel: ChannelContext, code: string[] | string) {
	const raw = getInternalRawColors(code);
	await Bun.write(join(channel.canvasDir, "raw.json"), JSON.stringify(sortObj(raw), null, 4));

	const semantic = getInternalSemanticColors(code, raw);
	await Bun.write(join(channel.canvasDir, "semantic.json"), JSON.stringify(sortObj(semantic), null, 4));
	await Bun.write(
		join(channel.canvasDir, "semantic_simple.json"),
		JSON.stringify(sortObj(convertSimpleSemantic(semantic)), null, 4),
	);

	await commit(
		["raw.json", "semantic.json", "semantic_simple.json"],
		`chore: update colors for ${channel.cuteVersion}`,
		channel.canvasDir,
	);
}
