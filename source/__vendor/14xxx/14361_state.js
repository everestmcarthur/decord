// Module ID: 14361
// Function ID: 14362
// Name: state
// Dependencies: [14325, 14300, 14362, 14316, 14363, 14345, 14323, 14356]

// Module 14361 (state)
import _mod14300 from "module_14300" /* 14300 */;
import __core_js_shared__ from "__core-js_shared__" /* 14316 */;
import call from "call" /* 14323 */;
import _mod14345 from "module_14345" /* 14345 */;
import all from "all" /* 14362 */;
import __core_js_shared__2 from "__core-js_shared__" /* 14363 */;

if (!all) {
  if (!__core_js_shared__.state) {
    const tmp = __core_js_shared__2("state");
    let closure_6 = tmp;
    _mod14345[tmp] = true;
    let fn = function t(facade) {
      if (call(facade, closure_6)) {
        const typeError = new tmp(14300).TypeError("Object already initialized");
        throw typeError;
      } else {
        arg1.facade = facade;
        tmp(14356)(facade, tmp3, arg1);
        return arg1;
      }
      tmp3 = closure_6;
    };
    let fn4 = fn;
    let fn2 = function n(arg0) {
      return call(arg0, closure_6) ? arg0[closure_6] : {};
    };
    let fn5 = fn2;
    let fn3 = function u(arg0) {
      return call(arg0, closure_6);
    };
    let fn6 = fn3;
  }
  let obj = { set: null, get: null, has: null, enforce: null, getterFor: null };
  obj[0] = fn;
  obj[1] = fn2;
  obj[2] = fn3;
  obj[3] = function enforce(toString) {
    if (fn6(toString)) {
      let tmp2 = fn5(toString);
    } else {
      tmp2 = fn4(toString, {});
    }
    return tmp2;
  };
  obj[4] = function getterFor(arg0) {
    closure_0 = arg0;
    return (arg0) => {
      if (callback(closure_1_1[0])(arg0)) {
        const tmp4 = closure_1_3(arg0);
        if (tmp4.type === callback) {
          return tmp4;
        }
      }
      const typeError = new callback(closure_1_1[1]).TypeError("Incompatible receiver, " + callback + " required");
      throw typeError;
    };
  };
  module.exports = obj;
}
let state = __core_js_shared__.state;
if (!state) {
  const _module = __core_js_shared__;
  const weakMap = new _mod14300.WeakMap();
  _module.state = weakMap;
  state = weakMap;
}
({ get: state.get, has: state.has, set: state.set } = state);
fn4 = function t(facade) {
  if (state.has(facade)) {
    const typeError = new _mod14300.TypeError("Object already initialized");
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
