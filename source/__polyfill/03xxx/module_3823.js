// Module ID: 3823
// Function ID: 3824
// Dependencies: [3667, 3663, 3824, 3825, 3664]
// Exports: default

// Module 3823
import module_3667_mod from "module_3667" /* 3667 */;
import _typeof_mod from "module_3663" /* 3663 */;
import startOfISOWeekYear_mod from "startOfISOWeekYear" /* 3824 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 3825 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let module_3667 = module_3667_mod;
if (!module_3667) {
  const obj = { default: module_3667 };
  let tmp3 = obj;
} else {
  tmp3 = module_3667;
}
module_3667 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let startOfISOWeekYear = startOfISOWeekYear_mod;
if (!startOfISOWeekYear) {
  const obj3 = { default: startOfISOWeekYear };
  let tmp7 = obj3;
} else {
  tmp7 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp7;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj4 = { default: differenceInCalendarDays };
  let tmp9 = obj4;
} else {
  tmp9 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp9;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj5 = { default: requiredArgs };
  let tmp11 = obj5;
} else {
  tmp11 = requiredArgs;
}
requiredArgs = tmp11;

export default function setISOWeekYear(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = module_3667.default(arg1);
  const date = new Date(0);
  date.setFullYear(defaultResult2, 0, 4);
  date.setHours(0, 0, 0, 0);
  const defaultResult4 = startOfISOWeekYear.default(date);
  defaultResult4.setDate(defaultResult4.getDate() + differenceInCalendarDays.default(defaultResult1, startOfISOWeekYear.default(defaultResult1)));
  return defaultResult4;
};
export default exports.default;
