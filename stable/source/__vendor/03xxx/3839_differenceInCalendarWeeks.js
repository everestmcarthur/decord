// Module ID: 3839
// Function ID: 3840
// Name: differenceInCalendarWeeks
// Dependencies: [3809, 3813, 3651]
// Exports: default

// Module 3839 (differenceInCalendarWeeks)
import startOfWeek_mod from "startOfWeek" /* 3809 */;
import module_3813_mod from "module_3813" /* 3813 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let startOfWeek = startOfWeek_mod;
if (!startOfWeek) {
  const obj = { default: startOfWeek };
  let tmp3 = obj;
} else {
  tmp3 = startOfWeek;
}
startOfWeek = tmp3;
let module_3813 = module_3813_mod;
if (!module_3813) {
  const obj2 = { default: module_3813 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3813;
}
module_3813 = tmp5;
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
  const diff = time - module_3813.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - module_3813.default(defaultResult2))) / c3);
};
export default exports.default;
