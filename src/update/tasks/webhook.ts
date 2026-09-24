import { basename } from "node:path";
import type { Canvas } from "@napi-rs/canvas";
import {
	type APIMessageTopLevelComponent,
	ComponentType,
	MessageFlags,
	type RESTPostAPIWebhookWithTokenJSONBody,
	RouteBases,
	Routes,
} from "discord-api-types/v10";
import { drawSections } from "../../canvas";
import { makeSections } from "../../canvas/factory";
import { type CodeDiff, type Diff, type Differs, DiffType } from "../../types";
import { ctx } from "../channel";
import { maxDiffChanges } from "../shared";
import { formatBytes, sortEntries } from "../utils";

function fileBase(path: string, other?: string) {
	if (!other) return `... ${basename(path)}`;
	const paths = path.split("/"),
		others = other.split("/");

	let offset = 0;
	while (offset < Math.min(paths.length, others.length) - 1 && paths[offset] === others[offset]) {
		offset++;
	}

	return `... ${paths.slice(offset).join("/")}`;
}

function makeFooter(size: number, item: string) {
	return `**${size.toLocaleString("en-US")}** ${item} change${size !== 1 ? "s" : ""} total`;
}

function getThreshold(lines: string[]) {
	return lines.some((x) => x.includes("\n")) ? Math.floor(maxDiffChanges / 2) : maxDiffChanges;
}

function cap(lines: string[], item: string) {
	const threshold = getThreshold(lines);
	if (lines.length > threshold)
		return [...lines.slice(0, threshold), `(+${(lines.length - threshold).toLocaleString("en-US")} ${item})`];
	return lines;
}

interface FormattedDiff {
	embed: string[];
	file: string;
	capped: boolean;
}

function formatDiff(diffs: Map<string, Diff | CodeDiff>): FormattedDiff {
	const entries = sortEntries([...diffs.entries()]);

	const sections = {
		Added: entries
			.filter(([, diff]) => diff.type === DiffType.Added)
			.map(([name, diff]) => {
				if ("size" in diff) return `+ ${fileBase(name)} (${formatBytes(diff.size)})`;
				const d = diff as Extract<Diff, { type: DiffType.Added | DiffType.Removed }>;
				return `+ ${name}: ${d.label || d.source}`;
			}),
		Changed: entries
			.filter(([, diff]) => diff.type === DiffType.Changed)
			.map(([name, diff]) => {
				const d = diff as Extract<Diff, { type: DiffType.Changed }>;
				return `- ${name}: ${d.oldLabel || d.oldSource}\n+ ${name}: ${d.label || d.source}`;
			}),
		Renamed: entries
			.filter(([, diff]) => diff.type === DiffType.Renamed)
			.map(([name, diff]) => {
				if ("size" in diff) {
					const cd = diff as Extract<CodeDiff, { type: DiffType.Renamed }>;
					return `- ${fileBase(cd.oldName, name)}\n+ ${fileBase(name, cd.oldName)}`;
				}
				const d = diff as Extract<Diff, { type: DiffType.Renamed }>;
				return `- ${d.oldName}\n+ ${name}`;
			}),
		Removed: entries
			.filter(([, diff]) => diff.type === DiffType.Removed)
			.map(([name, diff]) => {
				if ("size" in diff) return `- ${fileBase(name)} (${formatBytes(diff.size)})`;
				const d = diff as Extract<Diff, { type: DiffType.Added | DiffType.Removed }>;
				return `- ${name}: ${d.label || d.source}`;
			}),
	};

	const text = Object.entries(sections).filter(([, lines]) => lines.length);
	return {
		embed: text.map(
			([title, lines]) => `### ${title}\n\`\`\`diff\n${cap(lines, title.toLowerCase()).join("\n")}\`\`\``,
		),
		file: text.map(([title, lines]) => `# ${title}\n\n${lines.join("\n")}`).join("\n\n"),
		capped: text.some(([, lines]) => lines.length > getThreshold(lines)),
	};
}

interface WebhookEmbed {
	title: string;
	body: FormattedDiff;
	image?: Canvas;
	footer: string;
	key: string;
}

async function sendWebhook(webhook: string, role: string | undefined, embeds: WebhookEmbed[], color?: number) {
	const body = new FormData();
	const images = new Map<number, string>(),
		diffs = new Map<number, string>();

	let fi = 0;
	for (let i = 0; i < embeds.length; i++) {
		const embed = embeds[i];
		if (embed.image) {
			const key = fi++;
			const filename = `${embed.key}.png`;
			images.set(i, filename);

			body.append(`files[${key}]`, new Blob([embed.image.toBuffer("image/png")], { type: "image/png" }), filename);
		}
		if (embed.body.capped) {
			const key = fi++;
			const filename = `${embed.key}-changes.diff`;
			diffs.set(i, filename);

			body.append(`files[${key}]`, new Blob([embed.body.file], { type: "text/plain" }), filename);
		}
	}

	body.append(
		"payload_json",
		JSON.stringify({
			flags: MessageFlags.IsComponentsV2,
			components: [
				...(role
					? [
							{
								type: ComponentType.TextDisplay,
								content: `<@&${role}>`,
							},
						]
					: []),
				...embeds.map(
					({ title, body, image, footer }, i) =>
						({
							type: ComponentType.Container,
							accent_color: color,
							components: [
								{
									type: ComponentType.TextDisplay,
									content: `## ${title}\n-# ${ctx().version} (${ctx().cuteVersion})`,
								},
								...body.embed.map((content) => ({
									type: ComponentType.TextDisplay,
									content,
								})),
								body.capped && {
									type: ComponentType.File,
									file: {
										url: `attachment://${diffs.get(i)}`,
									},
								},
								body.capped && {
									type: ComponentType.Separator,
								},
								image && {
									type: ComponentType.MediaGallery,
									items: [
										{
											media: {
												url: `attachment://${images.get(i)}`,
											},
										},
									],
								},
								{
									type: ComponentType.TextDisplay,
									content: footer,
								},
							].filter((x) => !!x),
						}) as APIMessageTopLevelComponent,
				),
			],
			allowed_mentions: role && process.env.NODE_ENV !== "test" ? { roles: [role] } : { parse: [] },
		} as RESTPostAPIWebhookWithTokenJSONBody),
	);

	const url = new URL(webhook);
	url.searchParams.set("wait", "true");
	url.searchParams.set("with_components", "true");

	const res = await fetch(url, {
		method: "POST",
		body,
	});

	const data = await res.text();
	if (!res.ok)
		throw new Error(`Failed to send webhook message with embeds ${embeds.map((x) => x.title).join(", ")}: ${data}`);

	const discordToken = process.env.bot_token;
	if (!discordToken) return;

	try {
		const message = JSON.parse(data);
		const targetChannelId = process.env.channel_id || message.channel_id || "1532999192601952266";
		const messageId = message.id;
		if (!targetChannelId || !messageId) return;

		const route = `${RouteBases.api}/${Routes.channelMessageCrosspost(targetChannelId, messageId)}`;
		await fetch(route, {
			method: "POST",
			headers: {
				Authorization: discordToken.startsWith("Bot ") ? discordToken : `Bot ${discordToken}`,
			},
		});
	} catch {}
}

export async function webhook(diffs: Differs) {
	const defaultWebhook = process.env.code_webhook || process.env.color_webhook || process.env.icons_webhook;
	const colorWh = process.env.color_webhook || defaultWebhook;
	const iconsWh = process.env.icons_webhook || defaultWebhook;
	const codeWh = process.env.code_webhook || defaultWebhook;

	const defaultRole = process.env.role_id || "1481923706396872775";
	const colorRole = process.env.color_role || defaultRole;
	const iconsRole = process.env.icons_role || defaultRole;
	const codeRole = process.env.code_role || defaultRole;

	if (diffs.raw.size || diffs.semantic.size) {
		if (!colorWh) {
			console.warn("Missing color_webhook, skipping color webhook");
		} else {
			await sendWebhook(
				colorWh,
				colorRole,
				[
					diffs.raw.size && {
						title: "Raw colors",
						body: formatDiff(diffs.raw),
						image: drawSections(await makeSections(diffs.raw)),
						footer: makeFooter(diffs.raw.size, "raw color"),
						key: "raw-colors",
					},
					diffs.semantic.size && {
						title: "Semantic colors",
						body: formatDiff(diffs.semantic),
						image: drawSections(await makeSections(diffs.semantic)),
						footer: makeFooter(diffs.semantic.size, "semantic color"),
						key: "semantic-colors",
					},
				].filter((x) => !!x) as WebhookEmbed[],
				0xd8ef9e,
			);
		}
	}

	if (diffs.icons.size) {
		if (!iconsWh) {
			console.warn("Missing icons_webhook, skipping");
		} else {
			await sendWebhook(
				iconsWh,
				iconsRole,
				[
					{
						title: "Icons",
						body: formatDiff(diffs.icons),
						image: drawSections(await makeSections(diffs.icons, true)),
						footer: makeFooter(diffs.icons.size, "icon"),
						key: "icons",
					},
				],
				0xf4b8f7,
			);
		}
	}

	if (diffs.code.size) {
		if (!codeWh) {
			console.warn("Missing code_webhook, skipping");
			return;
		}
		await sendWebhook(
			codeWh,
			codeRole,
			[
				{
					title: "Code",
					body: formatDiff(diffs.code),
					footer: makeFooter(diffs.code.size, "code"),
					key: "code",
				},
			],
			0x86faf3,
		);
	}
}
