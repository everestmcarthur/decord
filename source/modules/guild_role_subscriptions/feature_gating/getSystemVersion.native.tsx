// Module ID: 5586
// Function ID: 5587
// Name: getSystemVersion
// Dependencies: [4617, 2]
// Exports: getSystemVersion

// Module 5586 (getSystemVersion)
import DeviceUtils from "DeviceUtils" /* 4617 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/getSystemVersion.native.tsx");

export const getSystemVersion = function getSystemVersion() {
  return DeviceUtils.getSystemVersion();
};
