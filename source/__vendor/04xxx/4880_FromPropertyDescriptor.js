// Module ID: 4880
// Function ID: 4881
// Name: FromPropertyDescriptor
// Dependencies: [4874, 1283, 4881]

// Module 4880 (FromPropertyDescriptor)
import _mod4874 from "module_4874" /* 4874 */;
import _mod4881 from "module_4881" /* 4881 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod4874(arg0)) {
      const tmp5 = new tmp(1283)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return _mod4881(arg0);
};
