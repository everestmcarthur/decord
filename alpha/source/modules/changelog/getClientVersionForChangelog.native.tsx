// Module ID: 17736
// Function ID: 17737
// Name: getClientVersionForChangelog
// Dependencies: [17737, 2]
// Exports: getClientVersionForChangelog

// Module 17736 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 17737 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};
