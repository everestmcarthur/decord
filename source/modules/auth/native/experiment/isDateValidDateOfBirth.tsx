// Module ID: 16093
// Function ID: 16094
// Name: isDateValidDateOfBirth
// Dependencies: [4231, 2]
// Exports: default

// Module 16093 (isDateValidDateOfBirth)
import _modDef4231 from "module_4231" /* 4231 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef4231().diff(arg0, "days") >= 1;
    const obj = _modDef4231();
  }
  return tmp;
};
