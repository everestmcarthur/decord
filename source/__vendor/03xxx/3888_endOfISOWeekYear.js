// Module ID: 3888
// Function ID: 3889
// Name: endOfISOWeekYear
// Dependencies: [3820, 3821, 3664]
// Exports: default

// Module 3888 (endOfISOWeekYear)
import module_3820_mod from "module_3820" /* 3820 */;
import startOfISOWeek_mod from "startOfISOWeek" /* 3821 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let module_3820 = module_3820_mod;
if (!module_3820) {
  const obj = { default: module_3820 };
  let tmp3 = obj;
} else {
  tmp3 = module_3820;
}
module_3820 = tmp3;
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
  date.setFullYear(module_3820.default(arg0) + 1, 0, 4);
  date.setHours(0, 0, 0, 0);
  const defaultResult2 = startOfISOWeek.default(date);
  defaultResult2.setMilliseconds(defaultResult2.getMilliseconds() - 1);
  return defaultResult2;
};
export default exports.default;
