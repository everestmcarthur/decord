// Module ID: 5551
// Function ID: 5552
// Name: getSystemVersion
// Dependencies: [4585, 2]
// Exports: getSystemVersion

// Module 5551 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4585 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return DeviceUtils.getSystemVersion();
};
