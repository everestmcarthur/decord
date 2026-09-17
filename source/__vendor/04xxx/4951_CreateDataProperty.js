// Module ID: 4951
// Function ID: 4952
// Name: CreateDataProperty
// Dependencies: [4889, 1282, 4936, 4952]

// Module 4951 (CreateDataProperty)
import _mod4889 from "module_4889" /* 4889 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod4889(arg0)) {
    if (tmp(4936)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return tmp(4952)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(1282)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
