// Module ID: 4157
// Function ID: 4158
// Name: startOfToday
// Dependencies: [3892]
// Exports: default

// Module 4157 (startOfToday)
import startOfDay_mod from "startOfDay" /* 3892 */;

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
