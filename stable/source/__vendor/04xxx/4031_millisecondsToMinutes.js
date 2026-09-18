// Module ID: 4031
// Function ID: 4032
// Name: millisecondsToMinutes
// Dependencies: [3651, 3829]
// Exports: default

// Module 4031 (millisecondsToMinutes)
import daysInWeek from "daysInWeek" /* 3829 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

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
