// Module ID: 4901
// Function ID: 4902
// Name: ToNumber
// Dependencies: [1281, 4902, 4903, 1282, 4908]

// Module 4901 (ToNumber)
import _mod1281 from "module_1281" /* 1281 */;
import _mod4902 from "module_4902" /* 4902 */;

let closure_2 = _mod1281("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod4902(arg0)) {
    tmp3 = tmp(4903)(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new tmp(1282)("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new tmp(1282)("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp8;
  } else {
    if (typeof tmp3 === "string") {
      let tmp5 = tmp(4908)(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
};
