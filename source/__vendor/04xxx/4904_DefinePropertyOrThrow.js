// Module ID: 4904
// Function ID: 4905
// Name: DefinePropertyOrThrow
// Dependencies: [4854, 1283, 4901, 4905, 4906, 4908, 4909, 4910, 4911]

// Module 4904 (DefinePropertyOrThrow)
import _mod4854 from "module_4854" /* 4854 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4854(arg0)) {
    if (tmp(4901)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(4905)(arg2)) {
        tmp13 = tmp(4906)(arg2);
      }
      if (tmp(4905)(tmp13)) {
        const tmpResult3 = tmp(4909);
        const tmpResult = tmp(4908);
        return tmpResult(tmpResult3, tmp(4910), tmp(4911), arg0, arg1, tmp14);
      } else {
        const tmp17 = new tmp(1283)("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new tmp(1283)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1283)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
