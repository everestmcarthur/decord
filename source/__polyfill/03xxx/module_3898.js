// Module ID: 3898
// Function ID: 3899
// Dependencies: [3663, 3664]
// Exports: default

// Module 3898
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
let c2 = 86400000;

export default function getUTCDayOfYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const time = defaultResult1.getTime();
  defaultResult1.setUTCMonth(0, 1);
  defaultResult1.setUTCHours(0, 0, 0, 0);
  return Math.floor((time - defaultResult1.getTime()) / c2) + 1;
};
export default exports.default;
