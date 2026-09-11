// Module ID: 4914
// Function ID: 4915
// Name: HasProperty
// Dependencies: [4855, 1283, 4902]

// Module 4914 (HasProperty)
import _mod4855 from "module_4855" /* 4855 */;


export default function HasProperty(arg0, arg1) {
  if (_mod4855(arg0)) {
    if (tmp(4902)(arg1)) {
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
