// Module ID: 4958
// Function ID: 4959
// Name: IsGenericDescriptor
// Dependencies: [4940, 1282, 4953, 4944]

// Module 4958 (IsGenericDescriptor)
import _mod4940 from "module_4940" /* 4940 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod4940(arg0)) {
    const tmp7 = tmp(4953)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(4944)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
