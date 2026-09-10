// Module ID: 4122
// Function ID: 4123
// Name: startOfToday
// Dependencies: [3857]
// Exports: default

// Module 4122 (startOfToday)
import startOfDay_mod from "startOfDay" /* 3857 */;

let startOfDay = startOfDay_mod;
if (!startOfDay) {
  const obj = { default: startOfDay };
  let tmp3 = obj;
} else {
  tmp3 = startOfDay;
}
startOfDay = tmp3;

export default function startOfToday() {
  return startOfDay.default(Date.now());
};
export default exports.default;
