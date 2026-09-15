// Module ID: 4900
// Function ID: 4901
// Name: ToNumber
// Dependencies: [1281, 4901, 4902, 1282, 4907]

// Module 4900 (ToNumber)
import _mod1281 from "module_1281" /* 1281 */;
import _mod4901 from "module_4901" /* 4901 */;

let closure_2 = _mod1281("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod4901(arg0)) {
    tmp3 = tmp(4902)(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new tmp(1282)("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new tmp(1282)("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp8;
  } else {
    if (typeof tmp3 === "string") {
      let tmp5 = tmp(4907)(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
};
