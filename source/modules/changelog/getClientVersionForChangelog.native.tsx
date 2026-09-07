// Module ID: 17329
// Function ID: 17330
// Name: getClientVersionForChangelog
// Dependencies: [17330, 2]
// Exports: getClientVersionForChangelog

// Module 17329 (getClientVersionForChangelog)
import set from "set" /* 2 */;
import getAppMajorVersion from "getAppMajorVersion" /* 17330 */;

const result = set.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return getAppMajorVersion.getAppMajorVersion();
};
