// Module ID: 5017
// Function ID: 5018
// Name: Get
// Dependencies: [4971, 1282, 5018, 1316]

// Module 5017 (Get)
import _mod4971 from "module_4971" /* 4971 */;


export default function Get(arg0, arg1) {
  if (_mod4971(arg0)) {
    if (tmp(5018)(arg1)) {
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
