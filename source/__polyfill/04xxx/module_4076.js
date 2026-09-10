// Module ID: 4076
// Function ID: 4077
// Dependencies: [3667, 3663, 3928, 3664]
// Exports: default

// Module 4076
import module_3667_mod from "module_3667" /* 3667 */;
import _typeof_mod from "module_3663" /* 3663 */;
import module_3928_mod from "module_3928" /* 3928 */;
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
let module_3928 = module_3928_mod;
if (!module_3928) {
  const obj3 = { default: module_3928 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3928;
}
module_3928 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setMonth(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = module_3667.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  const date1 = new Date(0);
  date1.setFullYear(fullYear, defaultResult2, 15);
  date1.setHours(0, 0, 0, 0);
  defaultResult1.setMonth(defaultResult2, Math.min(defaultResult1.getDate(), module_3928.default(date1)));
  return defaultResult1;
};
export default exports.default;
