// Module ID: 9950
// Function ID: 9951
// Name: icons/Share
// Dependencies: [1115, 9951, 9952, 2]

// Module 9950 (icons/Share)
import _modDef9951 from "module_9951" /* 9951 */;
import _modDef9952 from "module_9952" /* 9952 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isIOS()) {
  let importDefaultResult = _modDef9951;
} else {
  importDefaultResult = _modDef9952;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
