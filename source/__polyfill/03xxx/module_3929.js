// Module ID: 3929
// Function ID: 3930
// Dependencies: [3663, 3930, 3664]
// Exports: default

// Module 3929
import _typeof_mod from "module_3663" /* 3663 */;
import module_3930_mod from "module_3930" /* 3930 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_3930 = module_3930_mod;
if (!module_3930) {
  const obj2 = { default: module_3930 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3930;
}
module_3930 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function getDaysInYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  if ("Invalid Date" === String(date)) {
    return NaN;
  } else {
    let num = 365;
    if (module_3930.default(defaultResult1)) {
      num = 366;
    }
    return num;
  }
  date = new Date(defaultResult1);
};
export default exports.default;
