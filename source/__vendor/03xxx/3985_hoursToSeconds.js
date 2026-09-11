// Module ID: 3985
// Function ID: 3986
// Name: hoursToSeconds
// Dependencies: [3696, 3874]
// Exports: default

// Module 3985 (hoursToSeconds)
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

export default function hoursToSeconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.secondsInHour);
};
export default exports.default;
