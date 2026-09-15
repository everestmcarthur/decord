// Module ID: 4947
// Function ID: 4948
// Name: HasProperty
// Dependencies: [4888, 1282, 4935]

// Module 4947 (HasProperty)
import _mod4888 from "module_4888" /* 4888 */;


export default function HasProperty(arg0, arg1) {
  if (_mod4888(arg0)) {
    if (tmp(4935)(arg1)) {
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
