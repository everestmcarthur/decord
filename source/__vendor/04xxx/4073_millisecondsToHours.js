// Module ID: 4073
// Function ID: 4074
// Name: millisecondsToHours
// Dependencies: [3694, 3872]
// Exports: default

// Module 4073 (millisecondsToHours)
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

export default function millisecondsToHours(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.millisecondsInHour);
};
export default exports.default;
