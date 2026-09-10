// Module ID: 4875
// Function ID: 4876
// Name: ToPropertyDescriptor
// Dependencies: [4823, 1283, 1315, 4876, 4858]

// Module 4875 (ToPropertyDescriptor)
import _mod4823 from "module_4823" /* 4823 */;


export default function ToPropertyDescriptor(enumerable) {
  if (_mod4823(enumerable)) {
    const obj = {};
    if (tmp(1315)(enumerable, "enumerable")) {
      obj["[[Enumerable]]"] = tmp(4876)(enumerable.enumerable);
    }
    if (tmp(1315)(enumerable, "configurable")) {
      obj["[[Configurable]]"] = tmp(4876)(enumerable.configurable);
    }
    if (tmp(1315)(enumerable, "value")) {
      obj["[[Value]]"] = enumerable.value;
    }
    if (tmp(1315)(enumerable, "writable")) {
      obj["[[Writable]]"] = tmp(4876)(enumerable.writable);
    }
    if (tmp(1315)(enumerable, "get")) {
      const get = enumerable.get;
      if (undefined !== get) {
        if (!tmp(4858)(get)) {
          const tmp9 = new tmp(1283)("getter must be a function");
          throw tmp9;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (tmp(1315)(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!tmp(4858)(set)) {
          const tmp13 = new tmp(1283)("setter must be a function");
          throw tmp13;
        }
      }
      obj["[[Set]]"] = enumerable.set;
    }
    if (tmp(1315)(obj, "[[Get]]")) {
      const tmp17 = new tmp(1283)("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
      throw tmp17;
    }
    return obj;
  } else {
    const tmp5 = new tmp(1283)("ToPropertyDescriptor requires an object");
    throw tmp5;
  }
};
