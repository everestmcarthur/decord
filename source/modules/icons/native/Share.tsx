// Module ID: 9989
// Function ID: 9990
// Name: icons/Share
// Dependencies: [1364, 9990, 9991, 2]

// Module 9989 (icons/Share)
import _modDef9990 from "module_9990" /* 9990 */;
import _modDef9991 from "module_9991" /* 9991 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isIOS()) {
  let importDefaultResult = _modDef9990;
} else {
  importDefaultResult = _modDef9991;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
