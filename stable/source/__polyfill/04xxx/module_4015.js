// Module ID: 4015
// Function ID: 4016
// Dependencies: [3831, 3651]
// Exports: default

// Module 4015
import module_3831_mod from "module_3831" /* 3831 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let module_3831 = module_3831_mod;
if (!module_3831) {
  const obj = { default: module_3831 };
  let tmp3 = obj;
} else {
  tmp3 = module_3831;
}
module_3831 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_3831.default(arg0, Date.now());
};
export default exports.default;
