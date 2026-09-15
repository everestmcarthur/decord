// Module ID: 4122
// Function ID: 4123
// Name: nextTuesday
// Dependencies: [4116, 3729]
// Exports: default

// Module 4122 (nextTuesday)
import nextDay_mod from "nextDay" /* 4116 */;
import requiredArgs_mod from "requiredArgs" /* 3729 */;

let nextDay = nextDay_mod;
if (!nextDay) {
  const obj = { default: nextDay };
  let tmp3 = obj;
} else {
  tmp3 = nextDay;
}
nextDay = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function nextTuesday(arg0) {
  requiredArgs.default(1, arguments);
  return nextDay.default(arg0, 2);
};
export default exports.default;
