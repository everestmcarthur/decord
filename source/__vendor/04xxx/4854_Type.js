// Module ID: 4854
// Function ID: 4855
// Name: Type
// Dependencies: [4855]

// Module 4854 (Type)
import _mod4855 from "module_4855" /* 4855 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod4855(arg0);
    }
    str = str2;
  }
  return str;
};
