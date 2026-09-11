// Module ID: 4863
// Function ID: 4864
// Dependencies: [1316, 4864, 4866, 4867, 4891, 4892, 4879, 4915, 4902, 4916, 4917]

// Module 4863
import callBoundIntrinsic from "callBoundIntrinsic" /* 1316 */;
import ToObject from "ToObject" /* 4864 */;
import ToUint32 from "ToUint32" /* 4867 */;
import ToString from "ToString" /* 4879 */;
import _mod4891 from "module_4891" /* 4891 */;
import HasProperty from "HasProperty" /* 4915 */;

const ObjectResult = Object("a");
let tmp2 = "a" !== ObjectResult[0];
if (!tmp2) {
  tmp2 = !(0 in ObjectResult);
}
let closure_2 = tmp2;
let closure_3 = callBoundIntrinsic("String.prototype.split");

export default function map(arg0) {
  const tmp3 = ToObject(this);
  let arr = tmp3;
  if (closure_2) {
    arr = tmp3;
    if (tmp(4866)(tmp3)) {
      arr = closure_3(tmp3, "");
    }
  }
  const tmp5 = ToUint32(arr.length);
  if (_mod4891(arg0)) {
    if (arguments.length > 1) {
      const tmp11 = arguments[1];
    }
    const tmp12 = tmp(4892)(tmp3, tmp5);
    for (let num2 = 0; num2 < tmp5; num2 = num2 + 1) {
      let tmp13 = require;
      let tmp15 = ToString(num2);
      if (HasProperty(tmp3, tmp15)) {
        let tmp17 = tmp13(4902)(tmp3, tmp15);
        let items = [tmp17, num2, tmp3];
        let tmp18 = tmp13(4916)(arg0, tmp11, items);
        let tmp19 = tmp13(4917)(tmp12, tmp15, tmp18);
      }
    }
    return tmp12;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("Array.prototype.map callback must be a function");
    throw typeError;
  }
};
