// Module ID: 5021
// Function ID: 5022
// Name: DefinePropertyOrThrow
// Dependencies: [4971, 1282, 5018, 5022, 5023, 5025, 5026, 5027, 5028]

// Module 5021 (DefinePropertyOrThrow)
import _mod4971 from "module_4971" /* 4971 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4971(arg0)) {
    if (tmp(5018)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(5022)(arg2)) {
        tmp13 = tmp(5023)(arg2);
      }
      if (tmp(5022)(tmp13)) {
        const tmpResult3 = tmp(5026);
        const tmpResult = tmp(5025);
        return tmpResult(tmpResult3, tmp(5027), tmp(5028), arg0, arg1, tmp14);
      } else {
        const tmp17 = new tmp(1282)("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new tmp(1282)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
