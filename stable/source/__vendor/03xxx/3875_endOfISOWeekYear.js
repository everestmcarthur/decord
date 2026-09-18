// Module ID: 3875
// Function ID: 3876
// Name: endOfISOWeekYear
// Dependencies: [3807, 3808, 3651]
// Exports: default

// Module 3875 (endOfISOWeekYear)
import module_3807_mod from "module_3807" /* 3807 */;
import startOfISOWeek_mod from "startOfISOWeek" /* 3808 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let module_3807 = module_3807_mod;
if (!module_3807) {
  const obj = { default: module_3807 };
  let tmp3 = obj;
} else {
  tmp3 = module_3807;
}
module_3807 = tmp3;
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

export default function endOfISOWeekYear(arg0) {
  requiredArgs.default(1, arguments);
  const date = new Date(0);
  date.setFullYear(module_3807.default(arg0) + 1, 0, 4);
  date.setHours(0, 0, 0, 0);
  const defaultResult2 = startOfISOWeek.default(date);
  defaultResult2.setMilliseconds(defaultResult2.getMilliseconds() - 1);
  return defaultResult2;
};
export default exports.default;
