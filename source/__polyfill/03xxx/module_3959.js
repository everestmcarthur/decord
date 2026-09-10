// Module ID: 3959
// Function ID: 3960
// Dependencies: [3693, 3960, 3694]
// Exports: default

// Module 3959
import _typeof_mod from "module_3693" /* 3693 */;
import module_3960_mod from "module_3960" /* 3960 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_3960 = module_3960_mod;
if (!module_3960) {
  const obj2 = { default: module_3960 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3960;
}
module_3960 = tmp5;
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
    if (module_3960.default(defaultResult1)) {
      num = 366;
    }
    return num;
  }
  date = new Date(defaultResult1);
};
export default exports.default;
