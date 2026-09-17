// Module ID: 4950
// Function ID: 4951
// Name: CreateDataPropertyOrThrow
// Dependencies: [4889, 1282, 4936, 4951]

// Module 4950 (CreateDataPropertyOrThrow)
import _mod4889 from "module_4889" /* 4889 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4889(arg0)) {
    if (tmp(4936)(arg1)) {
      if (!tmp(4951)(arg0, arg1, arg2)) {
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
