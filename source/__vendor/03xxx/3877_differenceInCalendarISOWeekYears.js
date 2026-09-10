// Module ID: 3877
// Function ID: 3878
// Name: differenceInCalendarISOWeekYears
// Dependencies: [3850, 3694]
// Exports: default

// Module 3877 (differenceInCalendarISOWeekYears)
import module_3850_mod from "module_3850" /* 3850 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let module_3850 = module_3850_mod;
if (!module_3850) {
  const obj = { default: module_3850 };
  let tmp3 = obj;
} else {
  tmp3 = module_3850;
}
module_3850 = tmp3;
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
  return module_3850.default(arg0) - module_3850.default(arg1);
};
export default exports.default;
