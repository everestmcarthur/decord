// Module ID: 3949
// Function ID: 3950
// Dependencies: [3650, 3651]
// Exports: default

// Module 3949
import _typeof_mod from "module_3650" /* 3650 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

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

export default function isFriday(arg0) {
  requiredArgs.default(1, arguments);
  return 5 === _typeof.default(arg0).getDay();
};
export default exports.default;
