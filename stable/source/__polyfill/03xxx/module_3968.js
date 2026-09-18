// Module ID: 3968
// Function ID: 3969
// Dependencies: [3654, 3650, 3890, 3651]
// Exports: default

// Module 3968
import module_3654_mod from "module_3654" /* 3654 */;
import _typeof_mod from "module_3650" /* 3650 */;
import module_3890_mod from "module_3890" /* 3890 */;
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
let module_3890 = module_3890_mod;
if (!module_3890) {
  const obj3 = { default: module_3890 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3890;
}
module_3890 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setUTCWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = module_3890.default(defaultResult1, arg2) - module_3654.default(arg1);
  defaultResult1.setUTCDate(defaultResult1.getUTCDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;
