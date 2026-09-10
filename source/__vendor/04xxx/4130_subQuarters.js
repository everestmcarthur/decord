// Module ID: 4130
// Function ID: 4131
// Name: subQuarters
// Dependencies: [3697, 3859, 3694]
// Exports: default

// Module 4130 (subQuarters)
import module_3697_mod from "module_3697" /* 3697 */;
import module_3859_mod from "module_3859" /* 3859 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let module_3697 = module_3697_mod;
if (!module_3697) {
  const obj = { default: module_3697 };
  let tmp3 = obj;
} else {
  tmp3 = module_3697;
}
module_3697 = tmp3;
let module_3859 = module_3859_mod;
if (!module_3859) {
  const obj2 = { default: module_3859 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3859;
}
module_3859 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3859.default(arg0, -module_3697.default(arg1));
};
export default exports.default;
