// Module ID: 4020
// Function ID: 4021
// Dependencies: [3831, 4021, 3651]
// Exports: default

// Module 4020
import module_3831_mod from "module_3831" /* 3831 */;
import subDays_mod from "subDays" /* 4021 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let module_3831 = module_3831_mod;
if (!module_3831) {
  const obj = { default: module_3831 };
  let tmp3 = obj;
} else {
  tmp3 = module_3831;
}
module_3831 = tmp3;
let subDays = subDays_mod;
if (!subDays) {
  const obj2 = { default: subDays };
  let tmp5 = obj2;
} else {
  tmp5 = subDays;
}
subDays = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isYesterday(arg0) {
  requiredArgs.default(1, arguments);
  return module_3831.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;
