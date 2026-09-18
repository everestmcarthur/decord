// Module ID: 4023
// Function ID: 4024
// Name: lastDayOfISOWeek
// Dependencies: [4024, 3651]
// Exports: default

// Module 4023 (lastDayOfISOWeek)
import lastDayOfWeek_mod from "lastDayOfWeek" /* 4024 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let lastDayOfWeek = lastDayOfWeek_mod;
if (!lastDayOfWeek) {
  const obj = { default: lastDayOfWeek };
  let tmp3 = obj;
} else {
  tmp3 = lastDayOfWeek;
}
lastDayOfWeek = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function lastDayOfISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return lastDayOfWeek.default(arg0, { weekStartsOn: 1 });
};
export default exports.default;
