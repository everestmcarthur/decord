// Module ID: 9889
// Function ID: 9890
// Name: icons/Share
// Dependencies: [1115, 9890, 9891, 2]

// Module 9889 (icons/Share)
import _modDef9890 from "module_9890" /* 9890 */;
import _modDef9891 from "module_9891" /* 9891 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import size from "module_2" /* 2 */;

if (PlatformUtils.isIOS()) {
  let importDefaultResult = _modDef9890;
} else {
  importDefaultResult = _modDef9891;
}
const result = size.fileFinishedImporting("modules/icons/native/Share.tsx");

export default importDefaultResult;
