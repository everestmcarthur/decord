// Module ID: 4076
// Function ID: 4077
// Name: millisecondsToMinutes
// Dependencies: [3696, 3874]
// Exports: default

// Module 4076 (millisecondsToMinutes)
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

export default function millisecondsToMinutes(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.millisecondsInMinute);
};
export default exports.default;
