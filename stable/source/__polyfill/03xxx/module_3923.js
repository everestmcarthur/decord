// Module ID: 3923
// Function ID: 3924
// Dependencies: [3811, 3818, 3651]
// Exports: default

// Module 3923
import startOfISOWeekYear_mod from "startOfISOWeekYear" /* 3811 */;
import module_3818_mod from "module_3818" /* 3818 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let startOfISOWeekYear = startOfISOWeekYear_mod;
if (!startOfISOWeekYear) {
  const obj = { default: startOfISOWeekYear };
  let tmp3 = obj;
} else {
  tmp3 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp3;
let module_3818 = module_3818_mod;
if (!module_3818) {
  const obj2 = { default: module_3818 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3818;
}
module_3818 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 604800000;

export default function getISOWeeksInYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = startOfISOWeekYear.default(arg0);
  const defaultResult2 = startOfISOWeekYear.default(module_3818.default(defaultResult1, 60));
  return Math.round((startOfISOWeekYear.default(module_3818.default(defaultResult1, 60)).valueOf() - defaultResult1.valueOf()) / c3);
};
export default exports.default;
