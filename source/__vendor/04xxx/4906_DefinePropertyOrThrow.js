// Module ID: 4906
// Function ID: 4907
// Name: DefinePropertyOrThrow
// Dependencies: [4856, 1283, 4903, 4907, 4908, 4910, 4911, 4912, 4913]

// Module 4906 (DefinePropertyOrThrow)
import _mod4856 from "module_4856" /* 4856 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4856(arg0)) {
    if (tmp(4903)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(4907)(arg2)) {
        tmp13 = tmp(4908)(arg2);
      }
      if (tmp(4907)(tmp13)) {
        const tmpResult3 = tmp(4911);
        const tmpResult = tmp(4910);
        return tmpResult(tmpResult3, tmp(4912), tmp(4913), arg0, arg1, tmp14);
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
