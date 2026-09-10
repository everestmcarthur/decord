// Module ID: 17360
// Function ID: 17361
// Name: getClientVersionForChangelog
// Dependencies: [17361, 2]
// Exports: getClientVersionForChangelog

// Module 17360 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 17361 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};
