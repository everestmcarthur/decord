// Module ID: 4155
// Function ID: 4156
// Name: startOfToday
// Dependencies: [3890]
// Exports: default

// Module 4155 (startOfToday)
import startOfDay_mod from "startOfDay" /* 3890 */;

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
