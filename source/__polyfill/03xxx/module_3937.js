// Module ID: 3937
// Function ID: 3938
// Dependencies: [3663, 3664]
// Exports: default

// Module 3937
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

export default function getMilliseconds(arg0) {
  requiredArgs.default(1, arguments);
  return _typeof.default(arg0).getMilliseconds();
};
export default exports.default;
