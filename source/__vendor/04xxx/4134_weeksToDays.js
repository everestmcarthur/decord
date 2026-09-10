// Module ID: 4134
// Function ID: 4135
// Name: weeksToDays
// Dependencies: [3694, 3872]
// Exports: default

// Module 4134 (weeksToDays)
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

export default function weeksToDays(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.daysInWeek);
};
export default exports.default;
