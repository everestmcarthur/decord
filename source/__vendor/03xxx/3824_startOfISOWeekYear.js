// Module ID: 3824
// Function ID: 3825
// Name: startOfISOWeekYear
// Dependencies: [3820, 3821, 3664]
// Exports: default

// Module 3824 (startOfISOWeekYear)
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

export default function startOfISOWeekYear(arg0) {
  requiredArgs.default(1, arguments);
  const date = new Date(0);
  date.setFullYear(module_3820.default(arg0), 0, 4);
  date.setHours(0, 0, 0, 0);
  return startOfISOWeek.default(date);
};
export default exports.default;
