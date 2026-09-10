// Module ID: 4088
// Function ID: 4089
// Dependencies: [3944, 3663, 3664, 3667]
// Exports: default

// Module 4088
import module_3944_mod from "module_3944" /* 3944 */;
import _typeof_mod from "module_3663" /* 3663 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;
import module_3667_mod from "module_3667" /* 3667 */;

let module_3944 = module_3944_mod;
if (!module_3944) {
  const obj = { default: module_3944 };
  let tmp3 = obj;
} else {
  tmp3 = module_3944;
}
module_3944 = tmp3;
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
let module_3667 = module_3667_mod;
if (!module_3667) {
  const obj4 = { default: module_3667 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3667;
}
module_3667 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_3944.default(defaultResult1, arg2) - module_3667.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;
