// Module ID: 4943
// Function ID: 4944
// Name: IsDataDescriptor
// Dependencies: [4939, 1282, 1314]

// Module 4943 (IsDataDescriptor)
import _mod4939 from "module_4939" /* 4939 */;


export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod4939(arg0)) {
    const tmp7 = tmp(1314)(arg0, "[[Value]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(1314)(arg0, "[[Writable]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
