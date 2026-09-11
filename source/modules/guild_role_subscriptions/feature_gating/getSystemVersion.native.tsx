// Module ID: 5552
// Function ID: 5553
// Name: getSystemVersion
// Dependencies: [4586, 2]
// Exports: getSystemVersion

// Module 5552 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4586 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return DeviceUtils.getSystemVersion();
};
