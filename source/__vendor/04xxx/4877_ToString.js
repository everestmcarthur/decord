// Module ID: 4877
// Function ID: 4878
// Name: ToString
// Dependencies: [1282, 1283]

// Module 4877 (ToString)
import _mod1282 from "module_1282" /* 1282 */;
import _mod1283 from "module_1283" /* 1283 */;

let closure_2 = _mod1282("%String%");

export default function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const tmp5 = new _mod1283("Cannot convert a Symbol value to a string");
    throw tmp5;
  } else {
    return closure_2(arg0);
  }
};
