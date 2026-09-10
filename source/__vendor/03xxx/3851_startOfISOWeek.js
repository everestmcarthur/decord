// Module ID: 3851
// Function ID: 3852
// Name: startOfISOWeek
// Dependencies: [3852, 3694]
// Exports: default

// Module 3851 (startOfISOWeek)
import startOfWeek_mod from "startOfWeek" /* 3852 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let startOfWeek = startOfWeek_mod;
if (!startOfWeek) {
  const obj = { default: startOfWeek };
  let tmp3 = obj;
} else {
  tmp3 = startOfWeek;
}
startOfWeek = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function startOfISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return startOfWeek.default(arg0, { weekStartsOn: 1 });
};
export default exports.default;
