// Module ID: 3857
// Function ID: 3858
// Name: differenceInCalendarDays
// Dependencies: [3858, 3859, 3696]
// Exports: default

// Module 3857 (differenceInCalendarDays)
import module_3858_mod from "module_3858" /* 3858 */;
import startOfDay_mod from "startOfDay" /* 3859 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let module_3858 = module_3858_mod;
if (!module_3858) {
  const obj = { default: module_3858 };
  let tmp3 = obj;
} else {
  tmp3 = module_3858;
}
module_3858 = tmp3;
let startOfDay = startOfDay_mod;
if (!startOfDay) {
  const obj2 = { default: startOfDay };
  let tmp5 = obj2;
} else {
  tmp5 = startOfDay;
}
startOfDay = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 86400000;

export default function differenceInCalendarDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfDay.default(arg0);
  const defaultResult2 = startOfDay.default(arg1);
  const time = defaultResult1.getTime();
  const diff = time - module_3858.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - module_3858.default(defaultResult2))) / c3);
};
export default exports.default;
