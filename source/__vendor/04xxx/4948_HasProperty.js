// Module ID: 4948
// Function ID: 4949
// Name: HasProperty
// Dependencies: [4889, 1282, 4936]

// Module 4948 (HasProperty)
import _mod4889 from "module_4889" /* 4889 */;


export default function HasProperty(arg0, arg1) {
  if (_mod4889(arg0)) {
    if (tmp(4936)(arg1)) {
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
