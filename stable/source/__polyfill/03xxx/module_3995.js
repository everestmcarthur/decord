// Module ID: 3995
// Function ID: 3996
// Dependencies: [3996, 3651]
// Exports: default

// Module 3995
import startOfHour_mod from "startOfHour" /* 3996 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let startOfHour = startOfHour_mod;
if (!startOfHour) {
  const obj = { default: startOfHour };
  let tmp3 = obj;
} else {
  tmp3 = startOfHour;
}
startOfHour = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameHour(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfHour.default(arg0);
  const time = defaultResult1.getTime();
  return time === startOfHour.default(arg1).getTime();
};
export default exports.default;
