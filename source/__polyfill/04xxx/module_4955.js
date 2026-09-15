// Module ID: 4955
// Function ID: 4956
// Dependencies: [4887]

// Module 4955
import _mod4887 from "module_4887" /* 4887 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod4887(arg0);
    }
    str = str2;
  }
  return str;
};
