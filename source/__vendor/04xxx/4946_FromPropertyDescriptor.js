// Module ID: 4946
// Function ID: 4947
// Name: FromPropertyDescriptor
// Dependencies: [4940, 1282, 4947]

// Module 4946 (FromPropertyDescriptor)
import _mod4940 from "module_4940" /* 4940 */;
import _mod4947 from "module_4947" /* 4947 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod4940(arg0)) {
      const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return _mod4947(arg0);
};
