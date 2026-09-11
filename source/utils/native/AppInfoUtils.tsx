// Module ID: 17409
// Function ID: 17410
// Name: AppInfoUtils
// Dependencies: [1364, 2]
// Exports: getAppMajorVersion

// Module 17409 (AppInfoUtils)
import ClientInfoUtils from "ClientInfoUtils" /* 1364 */;
import size from "module_2" /* 2 */;

const constants = ClientInfoUtils.getConstants();
const result = size.fileFinishedImporting("utils/native/AppInfoUtils.tsx");

export const getAppMajorVersion = function getAppMajorVersion() {
  if (undefined === closure_0) {
    return -1;
  } else {
    const parts = tmp.Version.split(".");
    let num = -1;
    if (2 === parts.length) {
      const _Number = Number;
      num = Number(parts[0]);
    }
    return num;
  }
};
