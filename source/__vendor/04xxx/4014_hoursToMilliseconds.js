// Module ID: 4014
// Function ID: 4015
// Name: hoursToMilliseconds
// Dependencies: [3727, 3905]
// Exports: default

// Module 4014 (hoursToMilliseconds)
import daysInWeek from "daysInWeek" /* 3905 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function hoursToMilliseconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.millisecondsInHour);
};
export default exports.default;
