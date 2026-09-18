// Module ID: 5023
// Function ID: 5024
// Name: ToPropertyDescriptor
// Dependencies: [4971, 1282, 1314, 5024, 5006]

// Module 5023 (ToPropertyDescriptor)
import _mod4971 from "module_4971" /* 4971 */;


export default function ToPropertyDescriptor(enumerable) {
  if (_mod4971(enumerable)) {
    const obj = {};
    if (tmp(1314)(enumerable, "enumerable")) {
      obj["[[Enumerable]]"] = tmp(5024)(enumerable.enumerable);
    }
    if (tmp(1314)(enumerable, "configurable")) {
      obj["[[Configurable]]"] = tmp(5024)(enumerable.configurable);
    }
    if (tmp(1314)(enumerable, "value")) {
      obj["[[Value]]"] = enumerable.value;
    }
    if (tmp(1314)(enumerable, "writable")) {
      obj["[[Writable]]"] = tmp(5024)(enumerable.writable);
    }
    if (tmp(1314)(enumerable, "get")) {
      const get = enumerable.get;
      if (undefined !== get) {
        if (!tmp(5006)(get)) {
          const tmp9 = new tmp(1282)("getter must be a function");
          throw tmp9;
        }
      }
      obj["[[Get]]"] = get;
    }
    if (tmp(1314)(enumerable, "set")) {
      if (undefined !== enumerable.set) {
        if (!tmp(5006)(set)) {
          const tmp13 = new tmp(1282)("setter must be a function");
          throw tmp13;
        }
      }
      obj["[[Set]]"] = enumerable.set;
    }
    if (tmp(1314)(obj, "[[Get]]")) {
      const tmp17 = new tmp(1282)("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
      throw tmp17;
    }
    return obj;
  } else {
    const tmp5 = new tmp(1282)("ToPropertyDescriptor requires an object");
    throw tmp5;
  }
};
