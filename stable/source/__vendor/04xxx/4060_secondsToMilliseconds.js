// Module ID: 4060
// Function ID: 4061
// Name: secondsToMilliseconds
// Dependencies: [3651, 3829]
// Exports: default

// Module 4060 (secondsToMilliseconds)
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

export default function secondsToMilliseconds(arg0) {
  requiredArgs.default(1, arguments);
  return arg0 * daysInWeek.millisecondsInSecond;
};
export default exports.default;
