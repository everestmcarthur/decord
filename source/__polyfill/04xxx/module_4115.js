// Module ID: 4115
// Function ID: 4116
// Dependencies: [3699, 3695, 3967, 3696]
// Exports: default

// Module 4115
import module_3699_mod from "module_3699" /* 3699 */;
import _typeof_mod from "module_3695" /* 3695 */;
import module_3967_mod from "module_3967" /* 3967 */;
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
let module_3967 = module_3967_mod;
if (!module_3967) {
  const obj3 = { default: module_3967 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3967;
}
module_3967 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_3967.default(defaultResult1) - module_3699.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;
