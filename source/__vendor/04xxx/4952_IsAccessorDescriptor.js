// Module ID: 4952
// Function ID: 4953
// Name: IsAccessorDescriptor
// Dependencies: [4939, 1282, 1314]

// Module 4952 (IsAccessorDescriptor)
import _mod4939 from "module_4939" /* 4939 */;


export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod4939(arg0)) {
    const tmp7 = tmp(1314)(arg0, "[[Get]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(1314)(arg0, "[[Set]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
