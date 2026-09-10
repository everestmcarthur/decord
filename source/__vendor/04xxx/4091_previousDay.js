// Module ID: 4091
// Function ID: 4092
// Name: previousDay
// Dependencies: [3694, 3956, 4064]
// Exports: default

// Module 4091 (previousDay)
import requiredArgs_mod from "requiredArgs" /* 3694 */;
import module_3956_mod from "module_3956" /* 3956 */;
import subDays_mod from "subDays" /* 4064 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
let module_3956 = module_3956_mod;
if (!module_3956) {
  const obj2 = { default: module_3956 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3956;
}
module_3956 = tmp5;
let subDays = subDays_mod;
if (!subDays) {
  const obj3 = { default: subDays };
  let tmp7 = obj3;
} else {
  tmp7 = subDays;
}
subDays = tmp7;

export default function previousDay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const diff = module_3956.default(arg0) - arg1;
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return subDays.default(arg0, sum);
};
export default exports.default;
