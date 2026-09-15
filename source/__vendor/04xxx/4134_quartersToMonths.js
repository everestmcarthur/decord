// Module ID: 4134
// Function ID: 4135
// Name: quartersToMonths
// Dependencies: [3729, 3907]
// Exports: default

// Module 4134 (quartersToMonths)
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

export default function quartersToMonths(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.monthsInQuarter);
};
export default exports.default;
