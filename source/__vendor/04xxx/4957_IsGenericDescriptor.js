// Module ID: 4957
// Function ID: 4958
// Name: IsGenericDescriptor
// Dependencies: [4939, 1282, 4952, 4943]

// Module 4957 (IsGenericDescriptor)
import _mod4939 from "module_4939" /* 4939 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod4939(arg0)) {
    const tmp7 = tmp(4952)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(4943)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
