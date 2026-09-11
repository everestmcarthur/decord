// Module ID: 4916
// Function ID: 4917
// Name: CreateDataPropertyOrThrow
// Dependencies: [4855, 1283, 4902, 4917]

// Module 4916 (CreateDataPropertyOrThrow)
import _mod4855 from "module_4855" /* 4855 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4855(arg0)) {
    if (tmp(4902)(arg1)) {
      if (!tmp(4917)(arg0, arg1, arg2)) {
        const tmp15 = new tmp(1283)("unable to create data property");
        throw tmp15;
      }
    } else {
      const tmp10 = new tmp(1283)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1283)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
