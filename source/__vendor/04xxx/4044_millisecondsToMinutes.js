// Module ID: 4044
// Function ID: 4045
// Name: millisecondsToMinutes
// Dependencies: [3664, 3842]
// Exports: default

// Module 4044 (millisecondsToMinutes)
import daysInWeek from "daysInWeek" /* 3842 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function millisecondsToMinutes(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.millisecondsInMinute);
};
export default exports.default;
