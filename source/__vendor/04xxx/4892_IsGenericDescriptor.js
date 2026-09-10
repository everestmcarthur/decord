// Module ID: 4892
// Function ID: 4893
// Name: IsGenericDescriptor
// Dependencies: [4874, 1283, 4887, 4878]

// Module 4892 (IsGenericDescriptor)
import _mod4874 from "module_4874" /* 4874 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod4874(arg0)) {
    const tmp7 = tmp(4887)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(4878)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(1283)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
