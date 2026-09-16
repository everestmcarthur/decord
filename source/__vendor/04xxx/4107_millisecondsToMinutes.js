// Module ID: 4107
// Function ID: 4108
// Name: millisecondsToMinutes
// Dependencies: [3727, 3905]
// Exports: default

// Module 4107 (millisecondsToMinutes)
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

export default function millisecondsToMinutes(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.millisecondsInMinute);
};
export default exports.default;
