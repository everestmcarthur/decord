// Module ID: 4046
// Function ID: 4047
// Name: minutesToHours
// Dependencies: [3664, 3842]
// Exports: default

// Module 4046 (minutesToHours)
import daysInWeek from "daysInWeek" /* 3842 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function minutesToHours(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.minutesInHour);
};
export default exports.default;
