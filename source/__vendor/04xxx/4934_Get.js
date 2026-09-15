// Module ID: 4934
// Function ID: 4935
// Name: Get
// Dependencies: [4888, 1282, 4935, 1316]

// Module 4934 (Get)
import _mod4888 from "module_4888" /* 4888 */;


export default function Get(arg0, arg1) {
  if (_mod4888(arg0)) {
    if (tmp(4935)(arg1)) {
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
