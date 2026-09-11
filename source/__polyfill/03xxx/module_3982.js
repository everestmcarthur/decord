// Module ID: 3982
// Function ID: 3983
// Dependencies: [3695, 3696]
// Exports: default

// Module 3982
import _typeof_mod from "module_3695" /* 3695 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function getYear(arg0) {
  requiredArgs.default(1, arguments);
  return _typeof.default(arg0).getFullYear();
};
export default exports.default;
