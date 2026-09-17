// Module ID: 4935
// Function ID: 4936
// Name: Get
// Dependencies: [4889, 1282, 4936, 1316]

// Module 4935 (Get)
import _mod4889 from "module_4889" /* 4889 */;


export default function Get(arg0, arg1) {
  if (_mod4889(arg0)) {
    if (tmp(4936)(arg1)) {
      return arg0[arg1];
    } else {
      const tmpResult1 = new tmp(1282)("Assertion failed: P is not a Property Key, got " + tmp(1316)(arg1));
      throw tmpResult1;
    }
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
