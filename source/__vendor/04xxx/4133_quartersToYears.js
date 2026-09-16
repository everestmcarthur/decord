// Module ID: 4133
// Function ID: 4134
// Name: quartersToYears
// Dependencies: [3727, 3905]
// Exports: default

// Module 4133 (quartersToYears)
import daysInWeek from "daysInWeek" /* 3905 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;

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
