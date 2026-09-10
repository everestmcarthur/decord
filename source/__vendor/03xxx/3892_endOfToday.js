// Module ID: 3892
// Function ID: 3893
// Name: endOfToday
// Dependencies: [3863]
// Exports: default

// Module 3892 (endOfToday)
import endOfDay_mod from "endOfDay" /* 3863 */;

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
