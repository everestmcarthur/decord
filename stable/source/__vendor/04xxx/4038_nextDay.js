// Module ID: 4038
// Function ID: 4039
// Name: nextDay
// Dependencies: [3798, 3913, 3651]
// Exports: default

// Module 4038 (nextDay)
import module_3798_mod from "module_3798" /* 3798 */;
import module_3913_mod from "module_3913" /* 3913 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let module_3798 = module_3798_mod;
if (!module_3798) {
  const obj = { default: module_3798 };
  let tmp3 = obj;
} else {
  tmp3 = module_3798;
}
module_3798 = tmp3;
let module_3913 = module_3913_mod;
if (!module_3913) {
  const obj2 = { default: module_3913 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3913;
}
module_3913 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function nextDay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const diff = arg1 - module_3913.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_3798.default(arg0, sum);
};
export default exports.default;
