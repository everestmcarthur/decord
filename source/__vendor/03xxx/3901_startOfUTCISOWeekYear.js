// Module ID: 3901
// Function ID: 3902
// Name: startOfUTCISOWeekYear
// Dependencies: [3902, 3900, 3664]
// Exports: default

// Module 3901 (startOfUTCISOWeekYear)
import module_3902_mod from "module_3902" /* 3902 */;
import startOfUTCISOWeek_mod from "startOfUTCISOWeek" /* 3900 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let module_3902 = module_3902_mod;
if (!module_3902) {
  const obj = { default: module_3902 };
  let tmp3 = obj;
} else {
  tmp3 = module_3902;
}
module_3902 = tmp3;
let startOfUTCISOWeek = startOfUTCISOWeek_mod;
if (!startOfUTCISOWeek) {
  const obj2 = { default: startOfUTCISOWeek };
  let tmp5 = obj2;
} else {
  tmp5 = startOfUTCISOWeek;
}
startOfUTCISOWeek = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function startOfUTCISOWeekYear(arg0) {
  requiredArgs.default(1, arguments);
  const date = new Date(0);
  date.setUTCFullYear(module_3902.default(arg0), 0, 4);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCISOWeek.default(date);
};
export default exports.default;
