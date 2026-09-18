// Module ID: 3916
// Function ID: 3917
// Dependencies: [3650, 3917, 3651]
// Exports: default

// Module 3916
import _typeof_mod from "module_3650" /* 3650 */;
import module_3917_mod from "module_3917" /* 3917 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_3917 = module_3917_mod;
if (!module_3917) {
  const obj2 = { default: module_3917 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3917;
}
module_3917 = tmp5;
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
    if (module_3917.default(defaultResult1)) {
      num = 366;
    }
    return num;
  }
  date = new Date(defaultResult1);
};
export default exports.default;
