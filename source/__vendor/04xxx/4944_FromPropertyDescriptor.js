// Module ID: 4944
// Function ID: 4945
// Name: FromPropertyDescriptor
// Dependencies: [4938, 1282, 4945]

// Module 4944 (FromPropertyDescriptor)
import _mod4938 from "module_4938" /* 4938 */;
import _mod4945 from "module_4945" /* 4945 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod4938(arg0)) {
      const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return _mod4945(arg0);
};
