// Module ID: 4882
// Function ID: 4883
// Name: HasProperty
// Dependencies: [4823, 1283, 4870]

// Module 4882 (HasProperty)
import _mod4823 from "module_4823" /* 4823 */;


export default function HasProperty(arg0, arg1) {
  if (_mod4823(arg0)) {
    if (tmp(4870)(arg1)) {
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
