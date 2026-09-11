// Module ID: 4895
// Function ID: 4896
// Name: ArrayCreate
// Dependencies: [1282, 4892, 1283, 4896, 1302, 4897, 1304]

// Module 4895 (ArrayCreate)
import _mod1282 from "module_1282" /* 1282 */;
import _mod1283 from "module_1283" /* 1283 */;
import _mod4892 from "module_4892" /* 4892 */;

let closure_2 = _mod1282("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (_mod4892(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > tmp(4896)) {
        const tmp12 = new tmp(1302)("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (tmp(4897)) {
            tmp(4897)(items, tmp3);
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
