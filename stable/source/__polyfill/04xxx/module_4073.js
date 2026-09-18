// Module ID: 4073
// Function ID: 4074
// Dependencies: [3654, 3650, 4063, 3651]
// Exports: default

// Module 4073
import module_3654_mod from "module_3654" /* 3654 */;
import _typeof_mod from "module_3650" /* 3650 */;
import module_4063_mod from "module_4063" /* 4063 */;
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
let module_4063 = module_4063_mod;
if (!module_4063) {
  const obj3 = { default: module_4063 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4063;
}
module_4063 = tmp7;
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
  const diff = module_3654.default(arg1) - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return module_4063.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
export default exports.default;
