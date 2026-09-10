// Module ID: 3854
// Function ID: 3855
// Name: startOfISOWeekYear
// Dependencies: [3850, 3851, 3694]
// Exports: default

// Module 3854 (startOfISOWeekYear)
import module_3850_mod from "module_3850" /* 3850 */;
import startOfISOWeek_mod from "startOfISOWeek" /* 3851 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let module_3850 = module_3850_mod;
if (!module_3850) {
  const obj = { default: module_3850 };
  let tmp3 = obj;
} else {
  tmp3 = module_3850;
}
module_3850 = tmp3;
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
  date.setFullYear(module_3850.default(arg0), 0, 4);
  date.setHours(0, 0, 0, 0);
  return startOfISOWeek.default(date);
};
export default exports.default;
