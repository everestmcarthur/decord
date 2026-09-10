// Module ID: 4082
// Function ID: 4083
// Name: nextFriday
// Dependencies: [4081, 3694]
// Exports: default

// Module 4082 (nextFriday)
import nextDay_mod from "nextDay" /* 4081 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

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

export default function nextFriday(arg0) {
  requiredArgs.default(1, arguments);
  return nextDay.default(arg0, 5);
};
export default exports.default;
