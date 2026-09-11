// Module ID: 4915
// Function ID: 4916
// Name: Call
// Dependencies: [1282, 1316, 4893, 1283]

// Module 4915 (Call)
import _mod1282 from "module_1282" /* 1282 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1316 */;
import _mod4893 from "module_4893" /* 4893 */;

const _mod1283 = tmp2(1283);
let tmp = _mod1282("%Reflect.apply%", true);
if (!tmp) {
  tmp = callBoundIntrinsic("Function.prototype.apply");
}
let closure_2 = tmp;

export default function Call(arg0, arg1) {
  const tmp = arguments.length > 2 ? arguments[2] : [];
  if (_mod4893(tmp)) {
    return closure_2(arg0, arg1, tmp);
  } else {
    const tmp6 = new _mod1283("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp6;
  }
};
