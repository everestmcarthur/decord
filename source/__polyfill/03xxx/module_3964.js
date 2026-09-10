// Module ID: 3964
// Function ID: 3965
// Dependencies: [3965, 3845, 3664]
// Exports: default

// Module 3964
import _typeof_mod from "module_3965" /* 3965 */;
import module_3845_mod from "module_3845" /* 3845 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_3845 = module_3845_mod;
if (!module_3845) {
  const obj2 = { default: module_3845 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3845;
}
module_3845 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isMatch(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  return module_3845.default(_typeof.default(arg0, arg1, new Date(), arg2));
};
export default exports.default;
