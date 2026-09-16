// Module ID: 4885
// Function ID: 4886
// Name: Type
// Dependencies: [4886]

// Module 4885 (Type)
import _mod4886 from "module_4886" /* 4886 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod4886(arg0);
    }
    str = str2;
  }
  return str;
};
