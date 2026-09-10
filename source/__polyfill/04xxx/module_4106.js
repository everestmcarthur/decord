// Module ID: 4106
// Function ID: 4107
// Dependencies: [3697, 3693, 3958, 3694]
// Exports: default

// Module 4106
import module_3697_mod from "module_3697" /* 3697 */;
import _typeof_mod from "module_3693" /* 3693 */;
import module_3958_mod from "module_3958" /* 3958 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let module_3697 = module_3697_mod;
if (!module_3697) {
  const obj = { default: module_3697 };
  let tmp3 = obj;
} else {
  tmp3 = module_3697;
}
module_3697 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_3958 = module_3958_mod;
if (!module_3958) {
  const obj3 = { default: module_3958 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3958;
}
module_3958 = tmp7;
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
  const defaultResult2 = module_3697.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  const date1 = new Date(0);
  date1.setFullYear(fullYear, defaultResult2, 15);
  date1.setHours(0, 0, 0, 0);
  defaultResult1.setMonth(defaultResult2, Math.min(defaultResult1.getDate(), module_3958.default(date1)));
  return defaultResult1;
};
export default exports.default;
