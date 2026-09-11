// Module ID: 4106
// Function ID: 4107
// Name: secondsToMinutes
// Dependencies: [3696, 3874]
// Exports: default

// Module 4106 (secondsToMinutes)
import daysInWeek from "daysInWeek" /* 3874 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function secondsToMinutes(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.secondsInMinute);
};
export default exports.default;
