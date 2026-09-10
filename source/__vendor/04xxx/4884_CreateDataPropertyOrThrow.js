// Module ID: 4884
// Function ID: 4885
// Name: CreateDataPropertyOrThrow
// Dependencies: [4823, 1283, 4870, 4885]

// Module 4884 (CreateDataPropertyOrThrow)
import _mod4823 from "module_4823" /* 4823 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4823(arg0)) {
    if (tmp(4870)(arg1)) {
      if (!tmp(4885)(arg0, arg1, arg2)) {
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
