// Module ID: 4917
// Function ID: 4918
// Name: CreateDataProperty
// Dependencies: [4855, 1283, 4902, 4918]

// Module 4917 (CreateDataProperty)
import _mod4855 from "module_4855" /* 4855 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod4855(arg0)) {
    if (tmp(4902)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return tmp(4918)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(1283)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1283)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
