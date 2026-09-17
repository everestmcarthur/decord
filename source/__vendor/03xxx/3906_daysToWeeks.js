// Module ID: 3906
// Function ID: 3907
// Name: daysToWeeks
// Dependencies: [3729, 3907]
// Exports: default

// Module 3906 (daysToWeeks)
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

export default function daysToWeeks(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.daysInWeek);
};
export default exports.default;
