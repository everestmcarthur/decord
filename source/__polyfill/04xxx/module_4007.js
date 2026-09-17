// Module ID: 4007
// Function ID: 4008
// Dependencies: [3728, 3729]
// Exports: default

// Module 4007
import _typeof_mod from "module_3728" /* 3728 */;
import requiredArgs_mod from "requiredArgs" /* 3729 */;

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

export default function getTime(arg0) {
  requiredArgs.default(1, arguments);
  return _typeof.default(arg0).getTime();
};
export default exports.default;
