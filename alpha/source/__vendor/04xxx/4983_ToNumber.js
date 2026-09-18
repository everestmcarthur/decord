// Module ID: 4983
// Function ID: 4984
// Name: ToNumber
// Dependencies: [1281, 4984, 4985, 1282, 4990]

// Module 4983 (ToNumber)
import _mod1281 from "module_1281" /* 1281 */;
import _mod4984 from "module_4984" /* 4984 */;

let closure_2 = _mod1281("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod4984(arg0)) {
    tmp3 = tmp(4985)(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new tmp(1282)("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new tmp(1282)("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp8;
  } else {
    if (typeof tmp3 === "string") {
      let tmp5 = tmp(4990)(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
};
