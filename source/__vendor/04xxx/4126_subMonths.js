// Module ID: 4126
// Function ID: 4127
// Name: subMonths
// Dependencies: [3697, 3842, 3694]
// Exports: default

// Module 4126 (subMonths)
import module_3697_mod from "module_3697" /* 3697 */;
import module_3842_mod from "module_3842" /* 3842 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let module_3697 = module_3697_mod;
if (!module_3697) {
  const obj = { default: module_3697 };
  let tmp3 = obj;
} else {
  tmp3 = module_3697;
}
module_3697 = tmp3;
let module_3842 = module_3842_mod;
if (!module_3842) {
  const obj2 = { default: module_3842 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3842;
}
module_3842 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subMonths(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3842.default(arg0, -module_3697.default(arg1));
};
export default exports.default;
