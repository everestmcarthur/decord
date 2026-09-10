// Module ID: 4885
// Function ID: 4886
// Name: CreateDataProperty
// Dependencies: [4823, 1283, 4870, 4886]

// Module 4885 (CreateDataProperty)
import _mod4823 from "module_4823" /* 4823 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod4823(arg0)) {
    if (tmp(4870)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return tmp(4886)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(1283)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1283)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
