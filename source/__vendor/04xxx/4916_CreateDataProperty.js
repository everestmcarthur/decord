// Module ID: 4916
// Function ID: 4917
// Name: CreateDataProperty
// Dependencies: [4854, 1283, 4901, 4917]

// Module 4916 (CreateDataProperty)
import _mod4854 from "module_4854" /* 4854 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod4854(arg0)) {
    if (tmp(4901)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return tmp(4917)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(1283)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1283)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
