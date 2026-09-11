// Module ID: 3956
// Function ID: 3957
// Dependencies: [3695, 3699, 3696]
// Exports: default

// Module 3956
import _typeof_mod from "module_3695" /* 3695 */;
import module_3699_mod from "module_3699" /* 3699 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_3699 = module_3699_mod;
if (!module_3699) {
  const obj2 = { default: module_3699 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3699;
}
module_3699 = tmp5;
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
  return _typeof.default(1000 * module_3699.default(arg0));
};
export default exports.default;
