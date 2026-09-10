// Module ID: 4092
// Function ID: 4093
// Name: startOfToday
// Dependencies: [3827]
// Exports: default

// Module 4092 (startOfToday)
import startOfDay_mod from "startOfDay" /* 3827 */;

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
