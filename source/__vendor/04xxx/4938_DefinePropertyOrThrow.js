// Module ID: 4938
// Function ID: 4939
// Name: DefinePropertyOrThrow
// Dependencies: [4888, 1282, 4935, 4939, 4940, 4942, 4943, 4944, 4945]

// Module 4938 (DefinePropertyOrThrow)
import _mod4888 from "module_4888" /* 4888 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4888(arg0)) {
    if (tmp(4935)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(4939)(arg2)) {
        tmp13 = tmp(4940)(arg2);
      }
      if (tmp(4939)(tmp13)) {
        const tmpResult3 = tmp(4943);
        const tmpResult = tmp(4942);
        return tmpResult(tmpResult3, tmp(4944), tmp(4945), arg0, arg1, tmp14);
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
