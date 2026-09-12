// Module ID: 15639
// Function ID: 15640
// Name: _defineProperty
// Dependencies: [43]

// Module 15639 (_defineProperty)
import _mod43 from "module_43" /* 43 */;


export default function _defineProperty(arg0, arg1, value) {
  const tmp = _mod43(arg1);
  if (tmp in arg0) {
    const _Object = Object;
    const obj = { value, enumerable: true, configurable: true, writable: true };
    Object.defineProperty(arg0, tmp, obj);
  } else {
    arg0[tmp] = value;
  }
  return arg0;
};
