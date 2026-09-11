// Module ID: 3933
// Function ID: 3934
// Name: startOfUTCISOWeekYear
// Dependencies: [3934, 3932, 3696]
// Exports: default

// Module 3933 (startOfUTCISOWeekYear)
import module_3934_mod from "module_3934" /* 3934 */;
import startOfUTCISOWeek_mod from "startOfUTCISOWeek" /* 3932 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let module_3934 = module_3934_mod;
if (!module_3934) {
  const obj = { default: module_3934 };
  let tmp3 = obj;
} else {
  tmp3 = module_3934;
}
module_3934 = tmp3;
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
  date.setUTCFullYear(module_3934.default(arg0), 0, 4);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCISOWeek.default(date);
};
export default exports.default;
