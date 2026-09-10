// Module ID: 17419
// Function ID: 17420
// Name: getClientVersionForChangelog
// Dependencies: [17420, 2]
// Exports: getClientVersionForChangelog

// Module 17419 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 17420 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};
