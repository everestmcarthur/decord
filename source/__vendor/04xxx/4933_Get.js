// Module ID: 4933
// Function ID: 4934
// Name: Get
// Dependencies: [4887, 1282, 4934, 1316]

// Module 4933 (Get)
import _mod4887 from "module_4887" /* 4887 */;


export default function Get(arg0, arg1) {
  if (_mod4887(arg0)) {
    if (tmp(4934)(arg1)) {
      return arg0[arg1];
    } else {
      const tmpResult1 = new tmp(1282)("Assertion failed: P is not a Property Key, got " + tmp(1316)(arg1));
      throw tmpResult1;
    }
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
