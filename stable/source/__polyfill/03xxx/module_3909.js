// Module ID: 3909
// Function ID: 3910
// Dependencies: [3650, 3832, 3893]
// Exports: default

// Module 3909
import _typeof_mod from "module_3650" /* 3650 */;
import module_3832_mod from "module_3832" /* 3832 */;
import module_3893_mod from "module_3893" /* 3893 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_3832 = module_3832_mod;
if (!module_3832) {
  const obj2 = { default: module_3832 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3832;
}
module_3832 = tmp5;
let module_3893 = module_3893_mod;
if (!module_3893) {
  const obj3 = { default: module_3893 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3893;
}
module_3893 = tmp7;
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
    if (module_3832.default(defaultResult)) {
      const uTCFullYear = defaultResult.getUTCFullYear();
      const defaultResult1 = module_3893.default(defaultResult.getUTCDate(), 2);
      const defaultResult2 = module_3893.default(defaultResult.getUTCHours(), 2);
      const concat = "".concat;
      const defaultResult3 = module_3893.default(defaultResult.getUTCMinutes(), 2);
      const combined = "".concat(closure_3[defaultResult.getUTCDay(defaultResult)], ", ");
      const combined1 = combined.concat(defaultResult1, " ");
      const combined2 = combined1.concat(closure_4[defaultResult.getUTCMonth(defaultResult)], " ");
      const combined3 = combined2.concat(uTCFullYear, " ");
      const combined4 = combined3.concat(defaultResult2, ":");
      const combined5 = combined4.concat(defaultResult3, ":");
      return combined5.concat(module_3893.default(defaultResult.getUTCSeconds(), 2), " GMT");
    } else {
      const _RangeError = RangeError;
      const rangeError = new RangeError("Invalid time value");
      throw rangeError;
    }
  }
};
export default exports.default;
