// Module ID: 3922
// Function ID: 3923
// Name: endOfToday
// Dependencies: [3893]
// Exports: default

// Module 3922 (endOfToday)
import endOfDay_mod from "endOfDay" /* 3893 */;

let endOfDay = endOfDay_mod;
if (!endOfDay) {
  const obj = { default: endOfDay };
  let tmp3 = obj;
} else {
  tmp3 = endOfDay;
}
endOfDay = tmp3;

export default function endOfToday() {
  return endOfDay.default(Date.now());
};
export default exports.default;
