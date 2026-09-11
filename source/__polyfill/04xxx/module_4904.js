// Module ID: 4904
// Function ID: 4905
// Dependencies: [4905, 4906]

// Module 4904
import _mod4905 from "module_4905" /* 4905 */;
import DefinePropertyOrThrow from "DefinePropertyOrThrow" /* 4906 */;

const tmp = _mod4905("%Reflect.construct%", true);
let closure_0 = tmp;
try {
  const obj = {
    () => {

      }
  };
  DefinePropertyOrThrow({}, "", obj);
  let tmp4 = DefinePropertyOrThrow;
  if (tmp4) {
    if (tmp) {
      let closure_1 = {};
      const obj2 = {};
      const obj3 = {
        () => {
                throw closure_1;
              },
        "[[Enumerable]]": true
      };
      tmp4(obj2, "length", obj3);
      module.exports = function IsConstructor(arg0) {
        try {
          closure_0(arg0, obj2);
        } catch (tmp5) {
          return tmp5 === closure_1;
        }
      };
    }
  }
  module.exports = function IsConstructor(fn) {
    let prototype = typeof fn === "function";
    if (typeof fn === "function") {
      prototype = fn.prototype;
    }
    return prototype;
  };
} catch (err) {
  tmp4 = null;
}
