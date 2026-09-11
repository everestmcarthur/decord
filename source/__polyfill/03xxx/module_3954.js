// Module ID: 3954
// Function ID: 3955
// Dependencies: [3695, 3877, 3938]
// Exports: default

// Module 3954
import _typeof_mod from "module_3695" /* 3695 */;
import module_3877_mod from "module_3877" /* 3877 */;
import module_3938_mod from "module_3938" /* 3938 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_3877 = module_3877_mod;
if (!module_3877) {
  const obj2 = { default: module_3877 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3877;
}
module_3877 = tmp5;
let module_3938 = module_3938_mod;
if (!module_3938) {
  const obj3 = { default: module_3938 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3938;
}
module_3938 = tmp7;
let closure_3 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let closure_4 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function formatRFC7231(arg0) {
  if (arguments.length < 1) {
    const _TypeError = TypeError;
    const concat2 = "1 arguments required, but only ".concat;
    const typeError = new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
    throw typeError;
  } else {
    const defaultResult = _typeof.default(arg0);
    if (module_3877.default(defaultResult)) {
      const uTCFullYear = defaultResult.getUTCFullYear();
      const defaultResult1 = module_3938.default(defaultResult.getUTCDate(), 2);
      const defaultResult2 = module_3938.default(defaultResult.getUTCHours(), 2);
      const concat = "".concat;
      const defaultResult3 = module_3938.default(defaultResult.getUTCMinutes(), 2);
      const combined = "".concat(closure_3[defaultResult.getUTCDay(defaultResult)], ", ");
      const combined1 = combined.concat(defaultResult1, " ");
      const combined2 = combined1.concat(closure_4[defaultResult.getUTCMonth(defaultResult)], " ");
      const combined3 = combined2.concat(uTCFullYear, " ");
      const combined4 = combined3.concat(defaultResult2, ":");
      const combined5 = combined4.concat(defaultResult3, ":");
      return combined5.concat(module_3938.default(defaultResult.getUTCSeconds(), 2), " GMT");
    } else {
      const _RangeError = RangeError;
      const rangeError = new RangeError("Invalid time value");
      throw rangeError;
    }
  }
};
export default exports.default;
