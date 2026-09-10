// Module ID: 4115
// Function ID: 4116
// Dependencies: [3697, 3693, 3694]
// Exports: default

// Module 4115
import module_3697_mod from "module_3697" /* 3697 */;
import _typeof_mod from "module_3693" /* 3693 */;
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
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function setMinutes(module_3697, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_3697);
  defaultResult1.setMinutes(module_3697.default(arg1));
  return defaultResult1;
};
export default exports.default;
