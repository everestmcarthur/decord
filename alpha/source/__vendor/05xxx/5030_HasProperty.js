// Module ID: 5030
// Function ID: 5031
// Name: HasProperty
// Dependencies: [4971, 1282, 5018]

// Module 5030 (HasProperty)
import _mod4971 from "module_4971" /* 4971 */;


export default function HasProperty(arg0, arg1) {
  if (_mod4971(arg0)) {
    if (tmp(5018)(arg1)) {
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
