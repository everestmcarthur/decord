// Module ID: 4051
// Function ID: 4052
// Name: nextDay
// Dependencies: [3811, 3926, 3664]
// Exports: default

// Module 4051 (nextDay)
import module_3811_mod from "module_3811" /* 3811 */;
import module_3926_mod from "module_3926" /* 3926 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let module_3811 = module_3811_mod;
if (!module_3811) {
  const obj = { default: module_3811 };
  let tmp3 = obj;
} else {
  tmp3 = module_3811;
}
module_3811 = tmp3;
let module_3926 = module_3926_mod;
if (!module_3926) {
  const obj2 = { default: module_3926 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3926;
}
module_3926 = tmp5;
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
  const diff = arg1 - module_3926.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_3811.default(arg0, sum);
};
export default exports.default;
