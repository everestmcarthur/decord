// Module ID: 4949
// Function ID: 4950
// Name: CreateDataProperty
// Dependencies: [4887, 1282, 4934, 4950]

// Module 4949 (CreateDataProperty)
import _mod4887 from "module_4887" /* 4887 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod4887(arg0)) {
    if (tmp(4934)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return tmp(4950)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(1282)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
