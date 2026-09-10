// Module ID: 4913
// Function ID: 4914
// Name: HasProperty
// Dependencies: [4854, 1283, 4901]

// Module 4913 (HasProperty)
import _mod4854 from "module_4854" /* 4854 */;


export default function HasProperty(arg0, arg1) {
  if (_mod4854(arg0)) {
    if (tmp(4901)(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new tmp(1283)("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1283)("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
};
