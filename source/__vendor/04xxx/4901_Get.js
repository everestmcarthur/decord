// Module ID: 4901
// Function ID: 4902
// Name: Get
// Dependencies: [4855, 1283, 4902, 1317]

// Module 4901 (Get)
import _mod4855 from "module_4855" /* 4855 */;


export default function Get(arg0, arg1) {
  if (_mod4855(arg0)) {
    if (tmp(4902)(arg1)) {
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
