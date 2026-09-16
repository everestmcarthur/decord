// Module ID: 4946
// Function ID: 4947
// Name: HasProperty
// Dependencies: [4887, 1282, 4934]

// Module 4946 (HasProperty)
import _mod4887 from "module_4887" /* 4887 */;


export default function HasProperty(arg0, arg1) {
  if (_mod4887(arg0)) {
    if (tmp(4934)(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new tmp(1282)("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
};
