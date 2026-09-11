// Module ID: 4919
// Function ID: 4920
// Name: IsAccessorDescriptor
// Dependencies: [4906, 1283, 1315]

// Module 4919 (IsAccessorDescriptor)
import _mod4906 from "module_4906" /* 4906 */;


export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod4906(arg0)) {
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
