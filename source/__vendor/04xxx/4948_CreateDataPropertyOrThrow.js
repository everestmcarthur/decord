// Module ID: 4948
// Function ID: 4949
// Name: CreateDataPropertyOrThrow
// Dependencies: [4887, 1282, 4934, 4949]

// Module 4948 (CreateDataPropertyOrThrow)
import _mod4887 from "module_4887" /* 4887 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4887(arg0)) {
    if (tmp(4934)(arg1)) {
      if (!tmp(4949)(arg0, arg1, arg2)) {
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
