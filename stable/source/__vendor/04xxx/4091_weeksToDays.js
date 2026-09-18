// Module ID: 4091
// Function ID: 4092
// Name: weeksToDays
// Dependencies: [3651, 3829]
// Exports: default

// Module 4091 (weeksToDays)
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

export default function weeksToDays(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.daysInWeek);
};
export default exports.default;
