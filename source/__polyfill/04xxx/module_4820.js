// Module ID: 4820
// Function ID: 4821
// Dependencies: [4818, 1454, 1282, 4821, 4824, 4827, 4894]

// Module 4820
import _mod1282 from "module_1282" /* 1282 */;
import requirePromise from "requirePromise" /* 4818 */;
import callBind_mod from "callBind" /* 1454 */;

requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(_mod1282("%Promise.all%"));
let callBind = callBind_mod;
let closure_3 = callBind(_mod1282("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(4821)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return closure_2(this, tmp(4827)(tmp(4824)(arg0), (arg0) => {
      try {
        return promise.then((value) => ({ status: "fulfilled", value }), (reason) => ({ status: "rejected", reason }));
      } catch (tmp3) {
        return closure_3(tmp, tmp3);
      }
    }));
  }
};
