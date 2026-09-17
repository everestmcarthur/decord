// Module ID: 4138
// Function ID: 4139
// Name: secondsToMilliseconds
// Dependencies: [3729, 3907]
// Exports: default

// Module 4138 (secondsToMilliseconds)
import daysInWeek from "daysInWeek" /* 3907 */;
import requiredArgs_mod from "requiredArgs" /* 3729 */;

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
