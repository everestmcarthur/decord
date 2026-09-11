// Module ID: 4913
// Function ID: 4914
// Name: FromPropertyDescriptor
// Dependencies: [4907, 1283, 4914]

// Module 4913 (FromPropertyDescriptor)
import _mod4907 from "module_4907" /* 4907 */;
import _mod4914 from "module_4914" /* 4914 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod4907(arg0)) {
      const tmp5 = new tmp(1283)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return _mod4914(arg0);
};
