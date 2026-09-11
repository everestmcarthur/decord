// Module ID: 3876
// Function ID: 3877
// Dependencies: [3859, 3696]
// Exports: default

// Module 3876
import startOfDay_mod from "startOfDay" /* 3859 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let startOfDay = startOfDay_mod;
if (!startOfDay) {
  const obj = { default: startOfDay };
  let tmp3 = obj;
} else {
  tmp3 = startOfDay;
}
startOfDay = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameDay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfDay.default(arg0);
  const time = defaultResult1.getTime();
  return time === startOfDay.default(arg1).getTime();
};
export default exports.default;
