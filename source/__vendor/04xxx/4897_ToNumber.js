// Module ID: 4897
// Function ID: 4898
// Name: ToNumber
// Dependencies: [1282, 4898, 4899, 1283, 4904]

// Module 4897 (ToNumber)
import _mod1282 from "module_1282" /* 1282 */;
import _mod4898 from "module_4898" /* 4898 */;

let closure_2 = _mod1282("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod4898(arg0)) {
    tmp3 = tmp(4899)(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new tmp(1283)("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new tmp(1283)("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp8;
  } else {
    if (typeof tmp3 === "string") {
      let tmp5 = tmp(4904)(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
};
