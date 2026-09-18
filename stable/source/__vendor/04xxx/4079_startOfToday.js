// Module ID: 4079
// Function ID: 4080
// Name: startOfToday
// Dependencies: [3814]
// Exports: default

// Module 4079 (startOfToday)
import startOfDay_mod from "startOfDay" /* 3814 */;

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
