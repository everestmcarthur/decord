export const channels = ["alpha", "beta", "stable"] as const;
export type Channel = (typeof channels)[number];

export interface ChannelContext {
	channel: Channel;
	dataDir: string;
	canvasDir: string;
	workFolder: string;
	apksFolder: string;
	codePath: string;
	modulesPath: string;
	modulePathsDest: string;
	version: string;
	cuteVersion: string;
}

let current: ChannelContext | undefined;

export function setChannel(channel: Channel, version: string): ChannelContext {
	current = {
		channel,
		dataDir: `../data/${channel}`,
		canvasDir: `../canvas/${channel}`,
		workFolder: `tmp/${channel}`,
		apksFolder: `tmp/${channel}/apks`,
		codePath: `tmp/${channel}/code.js`,
		modulesPath: `tmp/${channel}/modules`,
		modulePathsDest: `../data/${channel}/module-paths.json`,
		version,
		cuteVersion: `${channel} ${version.slice(0, 3)}.${Number(version.slice(-2))}`,
	};
	return current;
}

export function ctx(): ChannelContext {
	if (!current) throw new Error("Channel context is not set");
	return current;
}
