// Module ID: 4082
// Function ID: 4083
// Dependencies: [3667, 3663, 3811, 3934, 3664]
// Exports: default

// Module 4082
import module_3667_mod from "module_3667" /* 3667 */;
import _typeof_mod from "module_3663" /* 3663 */;
import module_3811_mod from "module_3811" /* 3811 */;
import module_3934_mod from "module_3934" /* 3934 */;
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
let module_3811 = module_3811_mod;
if (!module_3811) {
  const obj3 = { default: module_3811 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3811;
}
module_3811 = tmp7;
let module_3934 = module_3934_mod;
if (!module_3934) {
  const obj4 = { default: module_3934 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3934;
}
module_3934 = tmp9;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj5 = { default: requiredArgs };
  let tmp11 = obj5;
} else {
  tmp11 = requiredArgs;
}
requiredArgs = tmp11;

export default function setISODay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  return module_3811.default(defaultResult1, module_3667.default(arg1) - module_3934.default(defaultResult1));
};
export default exports.default;
