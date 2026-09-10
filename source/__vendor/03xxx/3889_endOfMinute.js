// Module ID: 3889
// Function ID: 3890
// Name: endOfMinute
// Dependencies: [3663, 3664]
// Exports: default

// Module 3889 (endOfMinute)
import _typeof_mod from "module_3663" /* 3663 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

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

export default function endOfMinute(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  defaultResult1.setSeconds(59, 999);
  return defaultResult1;
};
export default exports.default;
