// Module ID: 4016
// Function ID: 4017
// Dependencies: [3798, 3831, 3651]
// Exports: default

// Module 4016
import module_3798_mod from "module_3798" /* 3798 */;
import module_3831_mod from "module_3831" /* 3831 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let module_3798 = module_3798_mod;
if (!module_3798) {
  const obj = { default: module_3798 };
  let tmp3 = obj;
} else {
  tmp3 = module_3798;
}
module_3798 = tmp3;
let module_3831 = module_3831_mod;
if (!module_3831) {
  const obj2 = { default: module_3831 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3831;
}
module_3831 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_3831.default(arg0, module_3798.default(Date.now(), 1));
};
export default exports.default;
