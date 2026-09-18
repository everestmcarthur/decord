// Module ID: 3834
// Function ID: 3835
// Name: differenceInCalendarISOWeekYears
// Dependencies: [3807, 3651]
// Exports: default

// Module 3834 (differenceInCalendarISOWeekYears)
import module_3807_mod from "module_3807" /* 3807 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let module_3807 = module_3807_mod;
if (!module_3807) {
  const obj = { default: module_3807 };
  let tmp3 = obj;
} else {
  tmp3 = module_3807;
}
module_3807 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInCalendarISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3807.default(arg0) - module_3807.default(arg1);
};
export default exports.default;
