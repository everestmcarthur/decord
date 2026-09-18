// Module ID: 4069
// Function ID: 4070
// Dependencies: [3654, 3650, 3798, 3921, 3651]
// Exports: default

// Module 4069
import module_3654_mod from "module_3654" /* 3654 */;
import _typeof_mod from "module_3650" /* 3650 */;
import module_3798_mod from "module_3798" /* 3798 */;
import module_3921_mod from "module_3921" /* 3921 */;
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
let module_3798 = module_3798_mod;
if (!module_3798) {
  const obj3 = { default: module_3798 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3798;
}
module_3798 = tmp7;
let module_3921 = module_3921_mod;
if (!module_3921) {
  const obj4 = { default: module_3921 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3921;
}
module_3921 = tmp9;
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
  return module_3798.default(defaultResult1, module_3654.default(arg1) - module_3921.default(defaultResult1));
};
export default exports.default;
