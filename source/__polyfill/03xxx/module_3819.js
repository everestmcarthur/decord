// Module ID: 3819
// Function ID: 3820
// Dependencies: [3667, 3820, 3823, 3664]
// Exports: default

// Module 3819
import module_3667_mod from "module_3667" /* 3667 */;
import module_3820_mod from "module_3820" /* 3820 */;
import module_3823_mod from "module_3823" /* 3823 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let module_3667 = module_3667_mod;
if (!module_3667) {
  const obj = { default: module_3667 };
  let tmp3 = obj;
} else {
  tmp3 = module_3667;
}
module_3667 = tmp3;
let module_3820 = module_3820_mod;
if (!module_3820) {
  const obj2 = { default: module_3820 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3820;
}
module_3820 = tmp5;
let module_3823 = module_3823_mod;
if (!module_3823) {
  const obj3 = { default: module_3823 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3823;
}
module_3823 = tmp7;
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
  return module_3823.default(arg0, module_3820.default(arg0) + module_3667.default(arg1));
};
export default exports.default;
