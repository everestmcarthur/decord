// Module ID: 4124
// Function ID: 4125
// Name: startOfToday
// Dependencies: [3859]
// Exports: default

// Module 4124 (startOfToday)
import startOfDay_mod from "startOfDay" /* 3859 */;

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
