// Module ID: 17575
// Function ID: 17576
// Name: getClientVersionForChangelog
// Dependencies: [17576, 2]
// Exports: getClientVersionForChangelog

// Module 17575 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 17576 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};
