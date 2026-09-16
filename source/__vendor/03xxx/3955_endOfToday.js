// Module ID: 3955
// Function ID: 3956
// Name: endOfToday
// Dependencies: [3926]
// Exports: default

// Module 3955 (endOfToday)
import endOfDay_mod from "endOfDay" /* 3926 */;

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
