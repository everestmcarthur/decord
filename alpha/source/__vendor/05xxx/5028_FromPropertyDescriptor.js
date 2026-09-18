// Module ID: 5028
// Function ID: 5029
// Name: FromPropertyDescriptor
// Dependencies: [5022, 1282, 5029]

// Module 5028 (FromPropertyDescriptor)
import _mod5022 from "module_5022" /* 5022 */;
import _mod5029 from "module_5029" /* 5029 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5022(arg0)) {
      const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return _mod5029(arg0);
};
