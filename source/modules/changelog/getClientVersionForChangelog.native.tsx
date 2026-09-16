// Module ID: 17534
// Function ID: 17535
// Name: getClientVersionForChangelog
// Dependencies: [17535, 2]
// Exports: getClientVersionForChangelog

// Module 17534 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 17535 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};
