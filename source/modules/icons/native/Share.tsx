// Module ID: 9948
// Function ID: 9949
// Name: icons/Share
// Dependencies: [1115, 9949, 9950, 2]

// Module 9948 (icons/Share)
import _modDef9949 from "module_9949" /* 9949 */;
import _modDef9950 from "module_9950" /* 9950 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isIOS()) {
  let importDefaultResult = _modDef9949;
} else {
  importDefaultResult = _modDef9950;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
