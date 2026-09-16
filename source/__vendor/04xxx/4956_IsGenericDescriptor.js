// Module ID: 4956
// Function ID: 4957
// Name: IsGenericDescriptor
// Dependencies: [4938, 1282, 4951, 4942]

// Module 4956 (IsGenericDescriptor)
import _mod4938 from "module_4938" /* 4938 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod4938(arg0)) {
    const tmp7 = tmp(4951)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(4942)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
