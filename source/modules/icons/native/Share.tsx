// Module ID: 10102
// Function ID: 10103
// Name: icons/Share
// Dependencies: [1364, 10103, 10104, 2]

// Module 10102 (icons/Share)
import _modDef10103 from "module_10103" /* 10103 */;
import _modDef10104 from "module_10104" /* 10104 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isIOS()) {
  let importDefaultResult = _modDef10103;
} else {
  importDefaultResult = _modDef10104;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
