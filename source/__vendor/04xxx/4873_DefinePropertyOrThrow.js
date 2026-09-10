// Module ID: 4873
// Function ID: 4874
// Name: DefinePropertyOrThrow
// Dependencies: [4823, 1283, 4870, 4874, 4875, 4877, 4878, 4879, 4880]

// Module 4873 (DefinePropertyOrThrow)
import _mod4823 from "module_4823" /* 4823 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4823(arg0)) {
    if (tmp(4870)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(4874)(arg2)) {
        tmp13 = tmp(4875)(arg2);
      }
      if (tmp(4874)(tmp13)) {
        const tmpResult3 = tmp(4878);
        const tmpResult = tmp(4877);
        return tmpResult(tmpResult3, tmp(4879), tmp(4880), arg0, arg1, tmp14);
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
