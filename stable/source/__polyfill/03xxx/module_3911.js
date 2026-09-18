// Module ID: 3911
// Function ID: 3912
// Dependencies: [3650, 3654, 3651]
// Exports: default

// Module 3911
import _typeof_mod from "module_3650" /* 3650 */;
import module_3654_mod from "module_3654" /* 3654 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_3654 = module_3654_mod;
if (!module_3654) {
  const obj2 = { default: module_3654 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3654;
}
module_3654 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function fromUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return _typeof.default(1000 * module_3654.default(arg0));
};
export default exports.default;
