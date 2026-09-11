// Module ID: 4085
// Function ID: 4086
// Name: nextMonday
// Dependencies: [4083, 3696]
// Exports: default

// Module 4085 (nextMonday)
import nextDay_mod from "nextDay" /* 4083 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

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

export default function nextMonday(arg0) {
  requiredArgs.default(1, arguments);
  return nextDay.default(arg0, 1);
};
export default exports.default;
