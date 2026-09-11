// Module ID: 4911
// Function ID: 4912
// Name: IsDataDescriptor
// Dependencies: [4907, 1283, 1315]

// Module 4911 (IsDataDescriptor)
import _mod4907 from "module_4907" /* 4907 */;


export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod4907(arg0)) {
    const tmp7 = tmp(1315)(arg0, "[[Value]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(1315)(arg0, "[[Writable]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new tmp(1283)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
