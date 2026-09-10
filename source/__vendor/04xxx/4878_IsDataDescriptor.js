// Module ID: 4878
// Function ID: 4879
// Name: IsDataDescriptor
// Dependencies: [4874, 1283, 1315]

// Module 4878 (IsDataDescriptor)
import _mod4874 from "module_4874" /* 4874 */;


export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod4874(arg0)) {
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
