// Module ID: 4925
// Function ID: 4926
// Name: IsGenericDescriptor
// Dependencies: [4907, 1283, 4920, 4911]

// Module 4925 (IsGenericDescriptor)
import _mod4907 from "module_4907" /* 4907 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod4907(arg0)) {
    const tmp7 = tmp(4920)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(4911)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(1283)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
