// Module ID: 16857
// Function ID: 16858
// Name: getFrameIFrameQueryParams
// Dependencies: [16858, 9788, 16859, 2]
// Exports: default

// Module 16857 (getFrameIFrameQueryParams)
import DiscordEnvironment from "DiscordEnvironment" /* 9788 */;
import getFrameLaunchContextQueryParamsDefault from "getFrameLaunchContextQueryParams" /* 16858 */;
import getFrameSurfaceQueryParamsDefault from "getFrameSurfaceQueryParams" /* 16859 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/getFrameIFrameQueryParams.tsx");

export default function getFrameIFrameQueryParams(data, platform) {
  const merged = Object.assign(getFrameLaunchContextQueryParamsDefault(data.data));
  const merged1 = Object.assign(DiscordEnvironment.getDiscordEnvQueryParams());
  const merged2 = Object.assign(getFrameSurfaceQueryParamsDefault(data.surface));
  return { instance_id: "example-cl-instance", platform, discord_proxy_ticket: data.data.proxyTicket };
};
