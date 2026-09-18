// Module ID: 5032
// Function ID: 5033
// Name: CreateDataPropertyOrThrow
// Dependencies: [4971, 1282, 5018, 5033]

// Module 5032 (CreateDataPropertyOrThrow)
import _mod4971 from "module_4971" /* 4971 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4971(arg0)) {
    if (tmp(5018)(arg1)) {
      if (!tmp(5033)(arg0, arg1, arg2)) {
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
