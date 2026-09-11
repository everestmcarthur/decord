// Module ID: 14411
// Function ID: 14412
// Name: state
// Dependencies: [14375, 14350, 14412, 14366, 14413, 14395, 14373, 14406]

// Module 14411 (state)
import _mod14350 from "module_14350" /* 14350 */;
import _mod14366 from "module_14366" /* 14366 */;
import _mod14375 from "module_14375" /* 14375 */;
import _mod14395 from "module_14395" /* 14395 */;
import _mod14412 from "module_14412" /* 14412 */;
import _mod14413 from "module_14413" /* 14413 */;

const require = globalThis.__r;

if (!_mod14412) {
  if (!_mod14366.state) {
    const tmp = _mod14413("state");
    let closure_6 = tmp;
    _mod14395[tmp] = true;
    let fn = function t(facade, arg1) {
      if (require("module_14373")(facade, closure_6)) {
        const typeError = new tmp(14350).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        tmp(14406)(facade, tmp3, arg1);
        return arg1;
      }
      tmp3 = closure_6;
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return require("module_14373")(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return require("module_14373")(arg0, closure_6);
    };
    let fn6 = fn3;
  }
  let obj = {
    set: fn,
    get: fn2,
    has: fn3,
    enforce(toString) {
        if (fn6(toString)) {
          let tmp2 = fn5(toString);
        } else {
          tmp2 = fn4(toString, {});
        }
        return tmp2;
      },
    getterFor(arg0) {
        closure_0 = arg0;
        return (arg0) => {
          if (_mod14375(arg0)) {
            const tmp4 = fn5(arg0);
            if (tmp4.type === closure_0) {
              return tmp4;
            }
          }
          const typeError = new _mod14350.TypeError("Incompatible receiver, " + closure_0 + " required");
          throw typeError;
        };
      }
  };
  module.exports = obj;
}
let state = _mod14366.state;
if (!state) {
  const _module = _mod14366;
  const weakMap = new _mod14350.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade, arg1) {
  if (state.has(facade)) {
    const typeError = new _mod14350.TypeError("Object already initialized");
    throw typeError;
  } else {
    arg1.facade = facade;
    const result = obj.set(facade, arg1);
    return arg1;
  }
  obj = state;
};
fn5 = function n(arg0) {
  return state.get(arg0) || {};
};
fn6 = function u(arg0) {
  return state.has(arg0);
};
fn3 = fn6;
fn2 = fn5;
fn = fn4;
