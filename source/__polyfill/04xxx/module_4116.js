// Module ID: 4116
// Function ID: 4117
// Dependencies: [3699, 3695, 3696]
// Exports: default

// Module 4116
import module_3699_mod from "module_3699" /* 3699 */;
import _typeof_mod from "module_3695" /* 3695 */;
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
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function setMilliseconds(module_3699, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_3699);
  defaultResult1.setMilliseconds(module_3699.default(arg1));
  return defaultResult1;
};
export default exports.default;
