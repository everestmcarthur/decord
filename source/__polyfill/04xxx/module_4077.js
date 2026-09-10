// Module ID: 4077
// Function ID: 4078
// Dependencies: [3667, 3663, 3664]
// Exports: default

// Module 4077
import module_3667_mod from "module_3667" /* 3667 */;
import _typeof_mod from "module_3663" /* 3663 */;
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
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function setDate(module_3667, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_3667);
  defaultResult1.setDate(module_3667.default(arg1));
  return defaultResult1;
};
export default exports.default;
