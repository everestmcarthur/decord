// Module ID: 4118
// Function ID: 4119
// Dependencies: [3699, 3695, 4108, 3696]
// Exports: default

// Module 4118
import module_3699_mod from "module_3699" /* 3699 */;
import _typeof_mod from "module_3695" /* 3695 */;
import module_4108_mod from "module_4108" /* 4108 */;
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
let module_4108 = module_4108_mod;
if (!module_4108) {
  const obj3 = { default: module_4108 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4108;
}
module_4108 = tmp7;
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
  const diff = module_3699.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4108.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;
