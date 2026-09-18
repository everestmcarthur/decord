// Module ID: 4075
// Function ID: 4076
// Dependencies: [3931, 3650, 3651, 3654]
// Exports: default

// Module 4075
import module_3931_mod from "module_3931" /* 3931 */;
import _typeof_mod from "module_3650" /* 3650 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;
import module_3654_mod from "module_3654" /* 3654 */;

let module_3931 = module_3931_mod;
if (!module_3931) {
  const obj = { default: module_3931 };
  let tmp3 = obj;
} else {
  tmp3 = module_3931;
}
module_3931 = tmp3;
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
let module_3654 = module_3654_mod;
if (!module_3654) {
  const obj4 = { default: module_3654 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3654;
}
module_3654 = tmp9;

export default function setWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_3931.default(defaultResult1, arg2) - module_3654.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;
