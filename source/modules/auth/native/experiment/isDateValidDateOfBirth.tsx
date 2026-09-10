// Module ID: 16016
// Function ID: 16017
// Name: isDateValidDateOfBirth
// Dependencies: [4166, 2]
// Exports: default

// Module 16016 (isDateValidDateOfBirth)
import _modDef4166 from "module_4166" /* 4166 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef4166().diff(arg0, "days") >= 1;
    const obj = _modDef4166();
  }
  return tmp;
};
