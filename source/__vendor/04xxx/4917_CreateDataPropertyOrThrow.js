// Module ID: 4917
// Function ID: 4918
// Name: CreateDataPropertyOrThrow
// Dependencies: [4856, 1283, 4903, 4918]

// Module 4917 (CreateDataPropertyOrThrow)
import _mod4856 from "module_4856" /* 4856 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4856(arg0)) {
    if (tmp(4903)(arg1)) {
      if (!tmp(4918)(arg0, arg1, arg2)) {
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
