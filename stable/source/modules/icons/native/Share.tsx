// Module ID: 9863
// Function ID: 9864
// Name: icons/Share
// Dependencies: [1115, 9864, 9865, 2]

// Module 9863 (icons/Share)
import _modDef9864 from "module_9864" /* 9864 */;
import _modDef9865 from "module_9865" /* 9865 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isIOS()) {
  let importDefaultResult = _modDef9864;
} else {
  importDefaultResult = _modDef9865;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
