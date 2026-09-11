// Module ID: 4120
// Function ID: 4121
// Dependencies: [3976, 3695, 3696, 3699]
// Exports: default

// Module 4120
import module_3976_mod from "module_3976" /* 3976 */;
import _typeof_mod from "module_3695" /* 3695 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;
import module_3699_mod from "module_3699" /* 3699 */;

let module_3976 = module_3976_mod;
if (!module_3976) {
  const obj = { default: module_3976 };
  let tmp3 = obj;
} else {
  tmp3 = module_3976;
}
module_3976 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let module_3699 = module_3699_mod;
if (!module_3699) {
  const obj4 = { default: module_3699 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3699;
}
module_3699 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_3976.default(defaultResult1, arg2) - module_3699.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;
