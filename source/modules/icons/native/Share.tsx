// Module ID: 9997
// Function ID: 9998
// Name: icons/Share
// Dependencies: [1364, 9998, 9999, 2]

// Module 9997 (icons/Share)
import _modDef9998 from "module_9998" /* 9998 */;
import _modDef9999 from "module_9999" /* 9999 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isIOS()) {
  let importDefaultResult = _modDef9998;
} else {
  importDefaultResult = _modDef9999;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
