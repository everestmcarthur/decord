// Module ID: 4852
// Function ID: 4853
// Dependencies: [4850, 1454, 1282, 4853, 4856, 4859, 4926]

// Module 4852
import _mod1282 from "module_1282" /* 1282 */;
import requirePromise from "requirePromise" /* 4850 */;
import callBind_mod from "callBind" /* 1454 */;

requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(_mod1282("%Promise.all%"));
let callBind = callBind_mod;
let closure_3 = callBind(_mod1282("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(4853)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return closure_2(this, tmp(4859)(tmp(4856)(arg0), (arg0) => {
      try {
        return promise.then((value) => ({ status: "fulfilled", value }), (reason) => ({ status: "rejected", reason }));
      } catch (tmp3) {
        return closure_3(tmp, tmp3);
      }
    }));
  }
};
