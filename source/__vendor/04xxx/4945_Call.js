// Module ID: 4945
// Function ID: 4946
// Name: Call
// Dependencies: [1282, 1316, 4923, 1283]

// Module 4945 (Call)
import _mod1282 from "module_1282" /* 1282 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1316 */;
import _mod4923 from "module_4923" /* 4923 */;

const _mod1283 = tmp2(1283);
let tmp = _mod1282("%Reflect.apply%", true);
if (!tmp) {
  tmp = callBoundIntrinsic("Function.prototype.apply");
}
let closure_2 = tmp;

export default function Call(arg0, arg1) {
  const tmp = arguments.length > 2 ? arguments[2] : [];
  if (_mod4923(tmp)) {
    return closure_2(arg0, arg1, tmp);
  } else {
    const tmp6 = new _mod1283("Assertion failed: optional `argumentsList`, if provided, must be a List");
    throw tmp6;
  }
};
