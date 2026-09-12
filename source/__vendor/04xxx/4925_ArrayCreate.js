// Module ID: 4925
// Function ID: 4926
// Name: ArrayCreate
// Dependencies: [1282, 4922, 1283, 4926, 1302, 4927, 1304]

// Module 4925 (ArrayCreate)
import _mod1282 from "module_1282" /* 1282 */;
import _mod1283 from "module_1283" /* 1283 */;
import _mod4922 from "module_4922" /* 4922 */;

let closure_2 = _mod1282("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (_mod4922(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > tmp(4926)) {
        const tmp12 = new tmp(1302)("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (tmp(4927)) {
            tmp(4927)(items, tmp3);
          } else {
            const tmp7 = new tmp(1304)("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
            throw tmp7;
          }
        }
        if (0 !== arg0) {
          items.length = arg0;
        }
        return items;
      }
    }
  }
  throw new _mod1283("Assertion failed: `length` must be an integer Number >= 0");
};
