// Module ID: 4116
// Function ID: 4117
// Dependencies: [3697, 3693, 4106, 3694]
// Exports: default

// Module 4116
import module_3697_mod from "module_3697" /* 3697 */;
import _typeof_mod from "module_3693" /* 3693 */;
import module_4106_mod from "module_4106" /* 4106 */;
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
let module_4106 = module_4106_mod;
if (!module_4106) {
  const obj3 = { default: module_4106 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4106;
}
module_4106 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setQuarter(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_3697.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4106.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;
