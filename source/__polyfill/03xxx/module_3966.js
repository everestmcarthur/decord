// Module ID: 3966
// Function ID: 3967
// Dependencies: [3854, 3861, 3694]
// Exports: default

// Module 3966
import startOfISOWeekYear_mod from "startOfISOWeekYear" /* 3854 */;
import module_3861_mod from "module_3861" /* 3861 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let startOfISOWeekYear = startOfISOWeekYear_mod;
if (!startOfISOWeekYear) {
  const obj = { default: startOfISOWeekYear };
  let tmp3 = obj;
} else {
  tmp3 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp3;
let module_3861 = module_3861_mod;
if (!module_3861) {
  const obj2 = { default: module_3861 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3861;
}
module_3861 = tmp5;
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
  const defaultResult2 = startOfISOWeekYear.default(module_3861.default(defaultResult1, 60));
  return Math.round((startOfISOWeekYear.default(module_3861.default(defaultResult1, 60)).valueOf() - defaultResult1.valueOf()) / c3);
};
export default exports.default;
