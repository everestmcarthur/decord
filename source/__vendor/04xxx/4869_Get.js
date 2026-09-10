// Module ID: 4869
// Function ID: 4870
// Name: Get
// Dependencies: [4823, 1283, 4870, 1317]

// Module 4869 (Get)
import _mod4823 from "module_4823" /* 4823 */;


export default function Get(arg0, arg1) {
  if (_mod4823(arg0)) {
    if (tmp(4870)(arg1)) {
      return arg0[arg1];
    } else {
      const tmpResult1 = new tmp(1283)("Assertion failed: P is not a Property Key, got " + tmp(1317)(arg1));
      throw tmpResult1;
    }
  } else {
    const tmp5 = new tmp(1283)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
