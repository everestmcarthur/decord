// Module ID: 4915
// Function ID: 4916
// Name: HasProperty
// Dependencies: [4856, 1283, 4903]

// Module 4915 (HasProperty)
import _mod4856 from "module_4856" /* 4856 */;


export default function HasProperty(arg0, arg1) {
  if (_mod4856(arg0)) {
    if (tmp(4903)(arg1)) {
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
