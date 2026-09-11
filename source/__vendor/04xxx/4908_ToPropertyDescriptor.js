// Module ID: 4908
// Function ID: 4909
// Name: ToPropertyDescriptor
// Dependencies: [4856, 1283, 1315, 4909, 4891]

// Module 4908 (ToPropertyDescriptor)
import _mod4856 from "module_4856" /* 4856 */;


export default function ToPropertyDescriptor(enumerable) {
  if (_mod4856(enumerable)) {
    const obj = {};
    if (tmp(1315)(enumerable, "enumerable")) {
      obj["[[Enumerable]]"] = tmp(4909)(enumerable.enumerable);
    }
    if (tmp(1315)(enumerable, "configurable")) {
      obj["[[Configurable]]"] = tmp(4909)(enumerable.configurable);
    }
    if (tmp(1315)(enumerable, "value")) {
      obj["[[Value]]"] = enumerable.value;
    }
    if (tmp(1315)(enumerable, "writable")) {
      obj["[[Writable]]"] = tmp(4909)(enumerable.writable);
    }
    if (tmp(1315)(enumerable, "get")) {
      const get = enumerable.get;
      if (undefined !== get) {
        if (!tmp(4891)(get)) {
          const tmp9 = new tmp(1283)("getter must be a function");
          throw tmp9;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (tmp(1315)(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!tmp(4891)(set)) {
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
