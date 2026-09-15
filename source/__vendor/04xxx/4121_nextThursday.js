// Module ID: 4121
// Function ID: 4122
// Name: nextThursday
// Dependencies: [4116, 3729]
// Exports: default

// Module 4121 (nextThursday)
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

export default function nextThursday(arg0) {
  requiredArgs.default(1, arguments);
  return nextDay.default(arg0, 4);
};
export default exports.default;
