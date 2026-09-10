// Module ID: 3983
// Function ID: 3984
// Dependencies: [3667, 3663, 3899, 3664]
// Exports: default

// Module 3983
import module_3667_mod from "module_3667" /* 3667 */;
import _typeof_mod from "module_3663" /* 3663 */;
import module_3899_mod from "module_3899" /* 3899 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let module_3667 = module_3667_mod;
if (!module_3667) {
  const obj = { default: module_3667 };
  let tmp3 = obj;
} else {
  tmp3 = module_3667;
}
module_3667 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_3899 = module_3899_mod;
if (!module_3899) {
  const obj3 = { default: module_3899 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3899;
}
module_3899 = tmp7;
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
  const diff = module_3899.default(defaultResult1) - module_3667.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;
