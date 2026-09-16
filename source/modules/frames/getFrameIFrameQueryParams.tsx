// Module ID: 16818
// Function ID: 16819
// Name: getFrameIFrameQueryParams
// Dependencies: [16819, 9777, 16820, 2]
// Exports: default

// Module 16818 (getFrameIFrameQueryParams)
import DiscordEnvironment from "DiscordEnvironment" /* 9777 */;
import getFrameLaunchContextQueryParamsDefault from "getFrameLaunchContextQueryParams" /* 16819 */;
import getFrameSurfaceQueryParamsDefault from "getFrameSurfaceQueryParams" /* 16820 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/getFrameIFrameQueryParams.tsx");

export default function getFrameIFrameQueryParams(data, platform) {
  const merged = Object.assign(getFrameLaunchContextQueryParamsDefault(data.data));
  const merged1 = Object.assign(DiscordEnvironment.getDiscordEnvQueryParams());
  const merged2 = Object.assign(getFrameSurfaceQueryParamsDefault(data.surface));
  return { instance_id: "example-cl-instance", platform, discord_proxy_ticket: data.data.proxyTicket };
};
