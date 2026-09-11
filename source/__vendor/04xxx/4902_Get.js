// Module ID: 4902
// Function ID: 4903
// Name: Get
// Dependencies: [4856, 1283, 4903, 1317]

// Module 4902 (Get)
import _mod4856 from "module_4856" /* 4856 */;


export default function Get(arg0, arg1) {
  if (_mod4856(arg0)) {
    if (tmp(4903)(arg1)) {
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
