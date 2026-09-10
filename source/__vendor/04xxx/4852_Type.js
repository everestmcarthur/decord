// Module ID: 4852
// Function ID: 4853
// Name: Type
// Dependencies: [4853]

// Module 4852 (Type)
import _mod4853 from "module_4853" /* 4853 */;


export default function Type(arg0) {
  let str = "Symbol";
  if (typeof arg0 !== "symbol") {
    let str2 = "BigInt";
    if (typeof arg0 !== "bigint") {
      str2 = _mod4853(arg0);
    }
    str = str2;
  }
  return str;
};
