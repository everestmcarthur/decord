// Module ID: 5040
// Function ID: 5041
// Name: IsGenericDescriptor
// Dependencies: [5022, 1282, 5035, 5026]

// Module 5040 (IsGenericDescriptor)
import _mod5022 from "module_5022" /* 5022 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5022(arg0)) {
    const tmp7 = tmp(5035)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(5026)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
