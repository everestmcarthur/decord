// Module ID: 4221
// Function ID: 4222
// Name: secondsToMilliseconds
// Dependencies: [3812, 3990]
// Exports: default

// Module 4221 (secondsToMilliseconds)
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

export default function secondsToMilliseconds(arg0) {
  requiredArgs.default(1, arguments);
  return arg0 * daysInWeek.millisecondsInSecond;
};
export default exports.default;
