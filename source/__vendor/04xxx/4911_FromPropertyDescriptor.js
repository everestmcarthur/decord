// Module ID: 4911
// Function ID: 4912
// Name: FromPropertyDescriptor
// Dependencies: [4905, 1283, 4912]

// Module 4911 (FromPropertyDescriptor)
import _mod4905 from "module_4905" /* 4905 */;
import _mod4912 from "module_4912" /* 4912 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod4905(arg0)) {
      const tmp5 = new tmp(1283)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return _mod4912(arg0);
};
