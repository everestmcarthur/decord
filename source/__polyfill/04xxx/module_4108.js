// Module ID: 4108
// Function ID: 4109
// Dependencies: [3699, 3695, 3960, 3696]
// Exports: default

// Module 4108
import module_3699_mod from "module_3699" /* 3699 */;
import _typeof_mod from "module_3695" /* 3695 */;
import module_3960_mod from "module_3960" /* 3960 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let module_3699 = module_3699_mod;
if (!module_3699) {
  const obj = { default: module_3699 };
  let tmp3 = obj;
} else {
  tmp3 = module_3699;
}
module_3699 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_3960 = module_3960_mod;
if (!module_3960) {
  const obj3 = { default: module_3960 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3960;
}
module_3960 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setMonth(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = module_3699.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  const date1 = new Date(0);
  date1.setFullYear(fullYear, defaultResult2, 15);
  date1.setHours(0, 0, 0, 0);
  defaultResult1.setMonth(defaultResult2, Math.min(defaultResult1.getDate(), module_3960.default(date1)));
  return defaultResult1;
};
export default exports.default;
