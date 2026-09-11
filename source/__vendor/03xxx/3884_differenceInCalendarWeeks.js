// Module ID: 3884
// Function ID: 3885
// Name: differenceInCalendarWeeks
// Dependencies: [3854, 3858, 3696]
// Exports: default

// Module 3884 (differenceInCalendarWeeks)
import startOfWeek_mod from "startOfWeek" /* 3854 */;
import module_3858_mod from "module_3858" /* 3858 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let startOfWeek = startOfWeek_mod;
if (!startOfWeek) {
  const obj = { default: startOfWeek };
  let tmp3 = obj;
} else {
  tmp3 = startOfWeek;
}
startOfWeek = tmp3;
let module_3858 = module_3858_mod;
if (!module_3858) {
  const obj2 = { default: module_3858 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3858;
}
module_3858 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 604800000;

export default function differenceInCalendarWeeks(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfWeek.default(arg0, arg2);
  const defaultResult2 = startOfWeek.default(arg1, arg2);
  const time = defaultResult1.getTime();
  const diff = time - module_3858.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - module_3858.default(defaultResult2))) / c3);
};
export default exports.default;
