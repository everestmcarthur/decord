// Module ID: 3888
// Function ID: 3889
// Name: startOfUTCISOWeekYear
// Dependencies: [3889, 3887, 3651]
// Exports: default

// Module 3888 (startOfUTCISOWeekYear)
import module_3889_mod from "module_3889" /* 3889 */;
import startOfUTCISOWeek_mod from "startOfUTCISOWeek" /* 3887 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let module_3889 = module_3889_mod;
if (!module_3889) {
  const obj = { default: module_3889 };
  let tmp3 = obj;
} else {
  tmp3 = module_3889;
}
module_3889 = tmp3;
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
  date.setUTCFullYear(module_3889.default(arg0), 0, 4);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCISOWeek.default(date);
};
export default exports.default;
