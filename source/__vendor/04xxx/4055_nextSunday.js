// Module ID: 4055
// Function ID: 4056
// Name: nextSunday
// Dependencies: [4051, 3664]
// Exports: default

// Module 4055 (nextSunday)
import nextDay_mod from "nextDay" /* 4051 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

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

export default function nextSunday(arg0) {
  requiredArgs.default(1, arguments);
  return nextDay.default(arg0, 0);
};
export default exports.default;
