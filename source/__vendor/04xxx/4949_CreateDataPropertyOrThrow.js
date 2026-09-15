// Module ID: 4949
// Function ID: 4950
// Name: CreateDataPropertyOrThrow
// Dependencies: [4888, 1282, 4935, 4950]

// Module 4949 (CreateDataPropertyOrThrow)
import _mod4888 from "module_4888" /* 4888 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4888(arg0)) {
    if (tmp(4935)(arg1)) {
      if (!tmp(4950)(arg0, arg1, arg2)) {
        const tmp15 = new tmp(1282)("unable to create data property");
        throw tmp15;
      }
    } else {
      const tmp10 = new tmp(1282)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
