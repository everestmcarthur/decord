// Module ID: 4015
// Function ID: 4016
// Dependencies: [3699, 3695, 3931, 3696]
// Exports: default

// Module 4015
import module_3699_mod from "module_3699" /* 3699 */;
import _typeof_mod from "module_3695" /* 3695 */;
import module_3931_mod from "module_3931" /* 3931 */;
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
let module_3931 = module_3931_mod;
if (!module_3931) {
  const obj3 = { default: module_3931 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3931;
}
module_3931 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setUTCISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_3931.default(defaultResult1) - module_3699.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;
