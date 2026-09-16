// Module ID: 16113
// Function ID: 16114
// Name: isDateValidDateOfBirth
// Dependencies: [4229, 2]
// Exports: default

// Module 16113 (isDateValidDateOfBirth)
import _modDef4229 from "module_4229" /* 4229 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/experiment/isDateValidDateOfBirth.tsx");

export default function isDateValidDateOfBirth(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _modDef4229().diff(arg0, "days") >= 1;
    const obj = _modDef4229();
  }
  return tmp;
};
