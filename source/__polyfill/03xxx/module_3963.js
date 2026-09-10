// Module ID: 3963
// Function ID: 3964
// Dependencies: [3693, 3694]
// Exports: default

// Module 3963
import _typeof_mod from "module_3693" /* 3693 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

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

export default function getHours(arg0) {
  requiredArgs.default(1, arguments);
  return _typeof.default(arg0).getHours();
};
export default exports.default;
