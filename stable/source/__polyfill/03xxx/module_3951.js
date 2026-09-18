// Module ID: 3951
// Function ID: 3952
// Dependencies: [3952, 3832, 3651]
// Exports: default

// Module 3951
import _typeof_mod from "module_3952" /* 3952 */;
import module_3832_mod from "module_3832" /* 3832 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_3832 = module_3832_mod;
if (!module_3832) {
  const obj2 = { default: module_3832 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3832;
}
module_3832 = tmp5;
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
  return module_3832.default(_typeof.default(arg0, arg1, new Date(), arg2));
};
export default exports.default;
