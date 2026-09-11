// Module ID: 4070
// Function ID: 4071
// Name: lastDayOfISOWeekYear
// Dependencies: [3852, 3853, 3696]
// Exports: default

// Module 4070 (lastDayOfISOWeekYear)
import module_3852_mod from "module_3852" /* 3852 */;
import startOfISOWeek_mod from "startOfISOWeek" /* 3853 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let module_3852 = module_3852_mod;
if (!module_3852) {
  const obj = { default: module_3852 };
  let tmp3 = obj;
} else {
  tmp3 = module_3852;
}
module_3852 = tmp3;
let startOfISOWeek = startOfISOWeek_mod;
if (!startOfISOWeek) {
  const obj2 = { default: startOfISOWeek };
  let tmp5 = obj2;
} else {
  tmp5 = startOfISOWeek;
}
startOfISOWeek = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function lastDayOfISOWeekYear(arg0) {
  requiredArgs.default(1, arguments);
  const date = new Date(0);
  date.setFullYear(module_3852.default(arg0) + 1, 0, 4);
  date.setHours(0, 0, 0, 0);
  const defaultResult2 = startOfISOWeek.default(date);
  defaultResult2.setDate(defaultResult2.getDate() - 1);
  return defaultResult2;
};
export default exports.default;
