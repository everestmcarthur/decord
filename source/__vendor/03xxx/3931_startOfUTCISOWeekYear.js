// Module ID: 3931
// Function ID: 3932
// Name: startOfUTCISOWeekYear
// Dependencies: [3932, 3930, 3694]
// Exports: default

// Module 3931 (startOfUTCISOWeekYear)
import module_3932_mod from "module_3932" /* 3932 */;
import startOfUTCISOWeek_mod from "startOfUTCISOWeek" /* 3930 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let module_3932 = module_3932_mod;
if (!module_3932) {
  const obj = { default: module_3932 };
  let tmp3 = obj;
} else {
  tmp3 = module_3932;
}
module_3932 = tmp3;
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
  date.setUTCFullYear(module_3932.default(arg0), 0, 4);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCISOWeek.default(date);
};
export default exports.default;
