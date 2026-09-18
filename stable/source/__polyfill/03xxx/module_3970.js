// Module ID: 3970
// Function ID: 3971
// Dependencies: [3654, 3650, 3886, 3651]
// Exports: default

// Module 3970
import module_3654_mod from "module_3654" /* 3654 */;
import _typeof_mod from "module_3650" /* 3650 */;
import module_3886_mod from "module_3886" /* 3886 */;
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
let module_3886 = module_3886_mod;
if (!module_3886) {
  const obj3 = { default: module_3886 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3886;
}
module_3886 = tmp7;
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
  const diff = module_3886.default(defaultResult1) - module_3654.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;
