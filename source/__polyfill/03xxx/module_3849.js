// Module ID: 3849
// Function ID: 3850
// Dependencies: [3697, 3850, 3853, 3694]
// Exports: default

// Module 3849
import module_3697_mod from "module_3697" /* 3697 */;
import module_3850_mod from "module_3850" /* 3850 */;
import module_3853_mod from "module_3853" /* 3853 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let module_3697 = module_3697_mod;
if (!module_3697) {
  const obj = { default: module_3697 };
  let tmp3 = obj;
} else {
  tmp3 = module_3697;
}
module_3697 = tmp3;
let module_3850 = module_3850_mod;
if (!module_3850) {
  const obj2 = { default: module_3850 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3850;
}
module_3850 = tmp5;
let module_3853 = module_3853_mod;
if (!module_3853) {
  const obj3 = { default: module_3853 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3853;
}
module_3853 = tmp7;
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
  return module_3853.default(arg0, module_3850.default(arg0) + module_3697.default(arg1));
};
export default exports.default;
