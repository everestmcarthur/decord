// Module ID: 4866
// Function ID: 4867
// Name: ToNumber
// Dependencies: [1282, 4867, 4868, 1283, 4873]

// Module 4866 (ToNumber)
import _mod1282 from "module_1282" /* 1282 */;
import _mod4867 from "module_4867" /* 4867 */;

let closure_2 = _mod1282("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod4867(arg0)) {
    tmp3 = tmp(4868)(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new tmp(1283)("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new tmp(1283)("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp8;
  } else {
    if (typeof tmp3 === "string") {
      let tmp5 = tmp(4873)(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
};
