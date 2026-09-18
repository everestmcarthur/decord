// Module ID: 17656
// Function ID: 17657
// Name: getClientVersionForChangelog
// Dependencies: [17657, 2]
// Exports: getClientVersionForChangelog

// Module 17656 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 17657 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};
