// Module ID: 4078
// Function ID: 4079
// Name: minutesToSeconds
// Dependencies: [3694, 3872]
// Exports: default

// Module 4078 (minutesToSeconds)
import daysInWeek from "daysInWeek" /* 3872 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function minutesToSeconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.secondsInMinute);
};
export default exports.default;
