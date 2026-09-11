// Module ID: 4135
// Function ID: 4136
// Name: subYears
// Dependencies: [3699, 3864, 3696]
// Exports: default

// Module 4135 (subYears)
import module_3699_mod from "module_3699" /* 3699 */;
import module_3864_mod from "module_3864" /* 3864 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let module_3699 = module_3699_mod;
if (!module_3699) {
  const obj = { default: module_3699 };
  let tmp3 = obj;
} else {
  tmp3 = module_3699;
}
module_3699 = tmp3;
let module_3864 = module_3864_mod;
if (!module_3864) {
  const obj2 = { default: module_3864 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3864;
}
module_3864 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3864.default(arg0, -module_3699.default(arg1));
};
export default exports.default;
