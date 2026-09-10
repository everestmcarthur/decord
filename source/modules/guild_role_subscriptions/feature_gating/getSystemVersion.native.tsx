// Module ID: 5514
// Function ID: 5515
// Name: getSystemVersion
// Dependencies: [4553, 2]
// Exports: getSystemVersion

// Module 5514 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4553 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return DeviceUtils.getSystemVersion();
};
