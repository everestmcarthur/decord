// Module ID: 3879
// Function ID: 3880
// Name: differenceInCalendarISOWeekYears
// Dependencies: [3852, 3696]
// Exports: default

// Module 3879 (differenceInCalendarISOWeekYears)
import module_3852_mod from "module_3852" /* 3852 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let module_3852 = module_3852_mod;
if (!module_3852) {
  const obj = { default: module_3852 };
  let tmp3 = obj;
} else {
  tmp3 = module_3852;
}
module_3852 = tmp3;
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
  return module_3852.default(arg0) - module_3852.default(arg1);
};
export default exports.default;
