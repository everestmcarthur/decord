// Module ID: 4924
// Function ID: 4925
// Name: IsGenericDescriptor
// Dependencies: [4906, 1283, 4919, 4910]

// Module 4924 (IsGenericDescriptor)
import _mod4906 from "module_4906" /* 4906 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod4906(arg0)) {
    const tmp7 = tmp(4919)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(4910)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(1283)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
