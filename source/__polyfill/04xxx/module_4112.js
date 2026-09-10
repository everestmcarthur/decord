// Module ID: 4112
// Function ID: 4113
// Dependencies: [3697, 3693, 3841, 3964, 3694]
// Exports: default

// Module 4112
import module_3697_mod from "module_3697" /* 3697 */;
import _typeof_mod from "module_3693" /* 3693 */;
import module_3841_mod from "module_3841" /* 3841 */;
import module_3964_mod from "module_3964" /* 3964 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let module_3697 = module_3697_mod;
if (!module_3697) {
  const obj = { default: module_3697 };
  let tmp3 = obj;
} else {
  tmp3 = module_3697;
}
module_3697 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_3841 = module_3841_mod;
if (!module_3841) {
  const obj3 = { default: module_3841 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3841;
}
module_3841 = tmp7;
let module_3964 = module_3964_mod;
if (!module_3964) {
  const obj4 = { default: module_3964 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3964;
}
module_3964 = tmp9;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj5 = { default: requiredArgs };
  let tmp11 = obj5;
} else {
  tmp11 = requiredArgs;
}
requiredArgs = tmp11;

export default function setISODay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  return module_3841.default(defaultResult1, module_3697.default(arg1) - module_3964.default(defaultResult1));
};
export default exports.default;
