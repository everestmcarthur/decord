// Module ID: 17438
// Function ID: 17439
// Name: getClientVersionForChangelog
// Dependencies: [17439, 2]
// Exports: getClientVersionForChangelog

// Module 17438 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 17439 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};
