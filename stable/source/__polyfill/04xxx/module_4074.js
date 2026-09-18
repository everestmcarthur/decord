// Module ID: 4074
// Function ID: 4075
// Dependencies: [3654, 3650, 3651]
// Exports: default

// Module 4074
import module_3654_mod from "module_3654" /* 3654 */;
import _typeof_mod from "module_3650" /* 3650 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let module_3654 = module_3654_mod;
if (!module_3654) {
  const obj = { default: module_3654 };
  let tmp3 = obj;
} else {
  tmp3 = module_3654;
}
module_3654 = tmp3;
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

export default function setSeconds(module_3654, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(module_3654);
  defaultResult1.setSeconds(module_3654.default(arg1));
  return defaultResult1;
};
export default exports.default;
