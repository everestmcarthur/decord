// Module ID: 4127
// Function ID: 4128
// Name: subBusinessDays
// Dependencies: [3843, 3694, 3697]
// Exports: default

// Module 4127 (subBusinessDays)
import module_3843_mod from "module_3843" /* 3843 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;
import module_3697_mod from "module_3697" /* 3697 */;

let module_3843 = module_3843_mod;
if (!module_3843) {
  const obj = { default: module_3843 };
  let tmp3 = obj;
} else {
  tmp3 = module_3843;
}
module_3843 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3697 = module_3697_mod;
if (!module_3697) {
  const obj3 = { default: module_3697 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3697;
}
module_3697 = tmp7;

export default function subBusinessDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3843.default(arg0, -module_3697.default(arg1));
};
export default exports.default;
