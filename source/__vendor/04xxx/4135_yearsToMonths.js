// Module ID: 4135
// Function ID: 4136
// Name: yearsToMonths
// Dependencies: [3694, 3872]
// Exports: default

// Module 4135 (yearsToMonths)
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

export default function yearsToMonths(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.monthsInYear);
};
export default exports.default;
