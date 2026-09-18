// Module ID: 4041
// Function ID: 4042
// Name: nextSaturday
// Dependencies: [4038, 3651]
// Exports: default

// Module 4041 (nextSaturday)
import nextDay_mod from "nextDay" /* 4038 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

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

export default function nextSaturday(arg0) {
  requiredArgs.default(1, arguments);
  return nextDay.default(arg0, 6);
};
export default exports.default;
