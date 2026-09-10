// Module ID: 3847
// Function ID: 3848
// Name: differenceInCalendarISOWeekYears
// Dependencies: [3820, 3664]
// Exports: default

// Module 3847 (differenceInCalendarISOWeekYears)
import module_3820_mod from "module_3820" /* 3820 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let module_3820 = module_3820_mod;
if (!module_3820) {
  const obj = { default: module_3820 };
  let tmp3 = obj;
} else {
  tmp3 = module_3820;
}
module_3820 = tmp3;
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
  return module_3820.default(arg0) - module_3820.default(arg1);
};
export default exports.default;
