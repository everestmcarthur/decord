// Module ID: 4937
// Function ID: 4938
// Name: DefinePropertyOrThrow
// Dependencies: [4887, 1282, 4934, 4938, 4939, 4941, 4942, 4943, 4944]

// Module 4937 (DefinePropertyOrThrow)
import _mod4887 from "module_4887" /* 4887 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4887(arg0)) {
    if (tmp(4934)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(4938)(arg2)) {
        tmp13 = tmp(4939)(arg2);
      }
      if (tmp(4938)(tmp13)) {
        const tmpResult3 = tmp(4942);
        const tmpResult = tmp(4941);
        return tmpResult(tmpResult3, tmp(4943), tmp(4944), arg0, arg1, tmp14);
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
