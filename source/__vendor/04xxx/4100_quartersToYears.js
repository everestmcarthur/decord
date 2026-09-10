// Module ID: 4100
// Function ID: 4101
// Name: quartersToYears
// Dependencies: [3694, 3872]
// Exports: default

// Module 4100 (quartersToYears)
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

export default function quartersToYears(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.quartersInYear);
};
export default exports.default;
