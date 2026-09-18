// Module ID: 3806
// Function ID: 3807
// Dependencies: [3654, 3807, 3810, 3651]
// Exports: default

// Module 3806
import module_3654_mod from "module_3654" /* 3654 */;
import module_3807_mod from "module_3807" /* 3807 */;
import module_3810_mod from "module_3810" /* 3810 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let module_3654 = module_3654_mod;
if (!module_3654) {
  const obj = { default: module_3654 };
  let tmp3 = obj;
} else {
  tmp3 = module_3654;
}
module_3654 = tmp3;
let module_3807 = module_3807_mod;
if (!module_3807) {
  const obj2 = { default: module_3807 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3807;
}
module_3807 = tmp5;
let module_3810 = module_3810_mod;
if (!module_3810) {
  const obj3 = { default: module_3810 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3810;
}
module_3810 = tmp7;
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
  return module_3810.default(arg0, module_3807.default(arg0) + module_3654.default(arg1));
};
export default exports.default;
