// Module ID: 4047
// Function ID: 4048
// Dependencies: [3907, 3696]
// Exports: default

// Module 4047
import startOfQuarter_mod from "startOfQuarter" /* 3907 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let startOfQuarter = startOfQuarter_mod;
if (!startOfQuarter) {
  const obj = { default: startOfQuarter };
  let tmp3 = obj;
} else {
  tmp3 = startOfQuarter;
}
startOfQuarter = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameQuarter(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfQuarter.default(arg0);
  const time = defaultResult1.getTime();
  return time === startOfQuarter.default(arg1).getTime();
};
export default exports.default;
