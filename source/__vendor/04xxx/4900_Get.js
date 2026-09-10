// Module ID: 4900
// Function ID: 4901
// Name: Get
// Dependencies: [4854, 1283, 4901, 1317]

// Module 4900 (Get)
import _mod4854 from "module_4854" /* 4854 */;


export default function Get(arg0, arg1) {
  if (_mod4854(arg0)) {
    if (tmp(4901)(arg1)) {
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
