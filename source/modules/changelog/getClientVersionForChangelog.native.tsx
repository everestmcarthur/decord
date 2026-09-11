// Module ID: 17409
// Function ID: 17410
// Name: getClientVersionForChangelog
// Dependencies: [17410, 2]
// Exports: getClientVersionForChangelog

// Module 17409 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 17410 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};
