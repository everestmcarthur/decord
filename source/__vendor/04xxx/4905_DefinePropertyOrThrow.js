// Module ID: 4905
// Function ID: 4906
// Name: DefinePropertyOrThrow
// Dependencies: [4855, 1283, 4902, 4906, 4907, 4909, 4910, 4911, 4912]

// Module 4905 (DefinePropertyOrThrow)
import _mod4855 from "module_4855" /* 4855 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4855(arg0)) {
    if (tmp(4902)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(4906)(arg2)) {
        tmp13 = tmp(4907)(arg2);
      }
      if (tmp(4906)(tmp13)) {
        const tmpResult3 = tmp(4910);
        const tmpResult = tmp(4909);
        return tmpResult(tmpResult3, tmp(4911), tmp(4912), arg0, arg1, tmp14);
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
