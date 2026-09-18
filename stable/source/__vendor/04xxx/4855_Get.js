// Module ID: 4855
// Function ID: 4856
// Name: Get
// Dependencies: [4809, 1283, 4856, 1317]

// Module 4855 (Get)
import _mod4809 from "module_4809" /* 4809 */;


export default function Get(arg0, arg1) {
  if (_mod4809(arg0)) {
    if (tmp(4856)(arg1)) {
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
