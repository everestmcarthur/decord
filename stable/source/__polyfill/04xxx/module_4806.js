// Module ID: 4806
// Function ID: 4807
// Dependencies: [4804, 1454, 1282, 4807, 4810, 4813, 4880]

// Module 4806
import _mod1282 from "module_1282" /* 1282 */;
import requirePromise from "requirePromise" /* 4804 */;
import callBind_mod from "callBind" /* 1454 */;

requirePromise();
let callBind = callBind_mod;
let closure_2 = callBind(_mod1282("%Promise.all%"));
let callBind = callBind_mod;
let closure_3 = callBind(_mod1282("%Promise.reject%"));

export default function allSettled(arg0) {
  const self = this;
  if ("Object" !== self(4807)(this)) {
    const _TypeError = TypeError;
    const typeError = new TypeError("`this` value must be an object");
    throw typeError;
  } else {
    return closure_2(this, tmp(4813)(tmp(4810)(arg0), (arg0) => {
      try {
        return promise.then((value) => ({ status: "fulfilled", value }), (reason) => ({ status: "rejected", reason }));
      } catch (tmp3) {
        return closure_3(tmp, tmp3);
      }
    }));
  }
};
