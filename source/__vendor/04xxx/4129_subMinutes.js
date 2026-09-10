// Module ID: 4129
// Function ID: 4130
// Name: subMinutes
// Dependencies: [3858, 3694, 3697]
// Exports: default

// Module 4129 (subMinutes)
import module_3858_mod from "module_3858" /* 3858 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;
import module_3697_mod from "module_3697" /* 3697 */;

let module_3858 = module_3858_mod;
if (!module_3858) {
  const obj = { default: module_3858 };
  let tmp3 = obj;
} else {
  tmp3 = module_3858;
}
module_3858 = tmp3;
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

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3858.default(arg0, -module_3697.default(arg1));
};
export default exports.default;
