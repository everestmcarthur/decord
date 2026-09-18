// Module ID: 5033
// Function ID: 5034
// Name: CreateDataProperty
// Dependencies: [4971, 1282, 5018, 5034]

// Module 5033 (CreateDataProperty)
import _mod4971 from "module_4971" /* 4971 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod4971(arg0)) {
    if (tmp(5018)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return tmp(5034)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(1282)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
