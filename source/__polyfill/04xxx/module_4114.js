// Module ID: 4114
// Function ID: 4115
// Dependencies: [3699, 3695, 3843, 3966, 3696]
// Exports: default

// Module 4114
import module_3699_mod from "module_3699" /* 3699 */;
import _typeof_mod from "module_3695" /* 3695 */;
import module_3843_mod from "module_3843" /* 3843 */;
import module_3966_mod from "module_3966" /* 3966 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let module_3699 = module_3699_mod;
if (!module_3699) {
  const obj = { default: module_3699 };
  let tmp3 = obj;
} else {
  tmp3 = module_3699;
}
module_3699 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_3843 = module_3843_mod;
if (!module_3843) {
  const obj3 = { default: module_3843 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3843;
}
module_3843 = tmp7;
let module_3966 = module_3966_mod;
if (!module_3966) {
  const obj4 = { default: module_3966 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3966;
}
module_3966 = tmp9;
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
  return module_3843.default(defaultResult1, module_3699.default(arg1) - module_3966.default(defaultResult1));
};
export default exports.default;
