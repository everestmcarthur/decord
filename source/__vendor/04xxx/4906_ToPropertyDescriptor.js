// Module ID: 4906
// Function ID: 4907
// Name: ToPropertyDescriptor
// Dependencies: [4854, 1283, 1315, 4907, 4889]

// Module 4906 (ToPropertyDescriptor)
import _mod4854 from "module_4854" /* 4854 */;


export default function ToPropertyDescriptor(enumerable) {
  if (_mod4854(enumerable)) {
    const obj = {};
    if (tmp(1315)(enumerable, "enumerable")) {
      obj["[[Enumerable]]"] = tmp(4907)(enumerable.enumerable);
    }
    if (tmp(1315)(enumerable, "configurable")) {
      obj["[[Configurable]]"] = tmp(4907)(enumerable.configurable);
    }
    if (tmp(1315)(enumerable, "value")) {
      obj["[[Value]]"] = enumerable.value;
    }
    if (tmp(1315)(enumerable, "writable")) {
      obj["[[Writable]]"] = tmp(4907)(enumerable.writable);
    }
    if (tmp(1315)(enumerable, "get")) {
      const get = enumerable.get;
      if (undefined !== get) {
        if (!tmp(4889)(get)) {
          const tmp9 = new tmp(1283)("getter must be a function");
          throw tmp9;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (tmp(1315)(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!tmp(4889)(set)) {
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
