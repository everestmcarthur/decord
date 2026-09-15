// Module ID: 4950
// Function ID: 4951
// Name: CreateDataProperty
// Dependencies: [4888, 1282, 4935, 4951]

// Module 4950 (CreateDataProperty)
import _mod4888 from "module_4888" /* 4888 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod4888(arg0)) {
    if (tmp(4935)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return tmp(4951)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(1282)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
