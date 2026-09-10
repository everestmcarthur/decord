// Module ID: 4923
// Function ID: 4924
// Name: IsGenericDescriptor
// Dependencies: [4905, 1283, 4918, 4909]

// Module 4923 (IsGenericDescriptor)
import _mod4905 from "module_4905" /* 4905 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod4905(arg0)) {
    const tmp7 = tmp(4918)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(4909)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(1283)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
