// Module ID: 4887
// Function ID: 4888
// Name: IsAccessorDescriptor
// Dependencies: [4874, 1283, 1315]

// Module 4887 (IsAccessorDescriptor)
import _mod4874 from "module_4874" /* 4874 */;


export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod4874(arg0)) {
    const tmp7 = tmp(1315)(arg0, "[[Get]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(1315)(arg0, "[[Set]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new tmp(1283)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
