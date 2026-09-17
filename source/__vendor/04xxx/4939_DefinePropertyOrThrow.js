// Module ID: 4939
// Function ID: 4940
// Name: DefinePropertyOrThrow
// Dependencies: [4889, 1282, 4936, 4940, 4941, 4943, 4944, 4945, 4946]

// Module 4939 (DefinePropertyOrThrow)
import _mod4889 from "module_4889" /* 4889 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4889(arg0)) {
    if (tmp(4936)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(4940)(arg2)) {
        tmp13 = tmp(4941)(arg2);
      }
      if (tmp(4940)(tmp13)) {
        const tmpResult3 = tmp(4944);
        const tmpResult = tmp(4943);
        return tmpResult(tmpResult3, tmp(4945), tmp(4946), arg0, arg1, tmp14);
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
