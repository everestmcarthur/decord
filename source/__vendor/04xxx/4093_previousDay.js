// Module ID: 4093
// Function ID: 4094
// Name: previousDay
// Dependencies: [3696, 3958, 4066]
// Exports: default

// Module 4093 (previousDay)
import requiredArgs_mod from "requiredArgs" /* 3696 */;
import module_3958_mod from "module_3958" /* 3958 */;
import subDays_mod from "subDays" /* 4066 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
let module_3958 = module_3958_mod;
if (!module_3958) {
  const obj2 = { default: module_3958 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3958;
}
module_3958 = tmp5;
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
  const diff = module_3958.default(arg0) - arg1;
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return subDays.default(arg0, sum);
};
export default exports.default;
