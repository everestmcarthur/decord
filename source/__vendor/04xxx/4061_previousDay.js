// Module ID: 4061
// Function ID: 4062
// Name: previousDay
// Dependencies: [3664, 3926, 4034]
// Exports: default

// Module 4061 (previousDay)
import requiredArgs_mod from "requiredArgs" /* 3664 */;
import module_3926_mod from "module_3926" /* 3926 */;
import subDays_mod from "subDays" /* 4034 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
let module_3926 = module_3926_mod;
if (!module_3926) {
  const obj2 = { default: module_3926 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3926;
}
module_3926 = tmp5;
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
  const diff = module_3926.default(arg0) - arg1;
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return subDays.default(arg0, sum);
};
export default exports.default;
