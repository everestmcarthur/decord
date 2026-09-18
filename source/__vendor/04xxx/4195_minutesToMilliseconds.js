// Module ID: 4195
// Function ID: 4196
// Name: minutesToMilliseconds
// Dependencies: [3812, 3990]
// Exports: default

// Module 4195 (minutesToMilliseconds)
import daysInWeek from "daysInWeek" /* 3990 */;
import requiredArgs_mod from "requiredArgs" /* 3812 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function minutesToMilliseconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.millisecondsInMinute);
};
export default exports.default;
