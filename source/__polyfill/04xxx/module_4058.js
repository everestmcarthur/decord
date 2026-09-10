// Module ID: 4058
// Function ID: 4059
// Dependencies: [3874, 3694]
// Exports: default

// Module 4058
import module_3874_mod from "module_3874" /* 3874 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let module_3874 = module_3874_mod;
if (!module_3874) {
  const obj = { default: module_3874 };
  let tmp3 = obj;
} else {
  tmp3 = module_3874;
}
module_3874 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_3874.default(arg0, Date.now());
};
export default exports.default;
