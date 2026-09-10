// Module ID: 4132
// Function ID: 4133
// Name: subWeeks
// Dependencies: [3697, 3861, 3694]
// Exports: default

// Module 4132 (subWeeks)
import module_3697_mod from "module_3697" /* 3697 */;
import module_3861_mod from "module_3861" /* 3861 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let module_3697 = module_3697_mod;
if (!module_3697) {
  const obj = { default: module_3697 };
  let tmp3 = obj;
} else {
  tmp3 = module_3697;
}
module_3697 = tmp3;
let module_3861 = module_3861_mod;
if (!module_3861) {
  const obj2 = { default: module_3861 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3861;
}
module_3861 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3861.default(arg0, -module_3697.default(arg1));
};
export default exports.default;
