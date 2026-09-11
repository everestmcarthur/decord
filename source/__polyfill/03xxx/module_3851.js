// Module ID: 3851
// Function ID: 3852
// Dependencies: [3699, 3852, 3855, 3696]
// Exports: default

// Module 3851
import module_3699_mod from "module_3699" /* 3699 */;
import module_3852_mod from "module_3852" /* 3852 */;
import module_3855_mod from "module_3855" /* 3855 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let module_3699 = module_3699_mod;
if (!module_3699) {
  const obj = { default: module_3699 };
  let tmp3 = obj;
} else {
  tmp3 = module_3699;
}
module_3699 = tmp3;
let module_3852 = module_3852_mod;
if (!module_3852) {
  const obj2 = { default: module_3852 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3852;
}
module_3852 = tmp5;
let module_3855 = module_3855_mod;
if (!module_3855) {
  const obj3 = { default: module_3855 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3855;
}
module_3855 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function addISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3855.default(arg0, module_3852.default(arg0) + module_3699.default(arg1));
};
export default exports.default;
