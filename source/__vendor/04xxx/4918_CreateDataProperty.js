// Module ID: 4918
// Function ID: 4919
// Name: CreateDataProperty
// Dependencies: [4856, 1283, 4903, 4919]

// Module 4918 (CreateDataProperty)
import _mod4856 from "module_4856" /* 4856 */;


export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (_mod4856(arg0)) {
    if (tmp(4903)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, [[Value]], "[[Writable]]": true };
      return tmp(4919)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(1283)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1283)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
