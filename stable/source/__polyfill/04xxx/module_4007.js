// Module ID: 4007
// Function ID: 4008
// Dependencies: [3997, 3651]
// Exports: default

// Module 4007
import module_3997_mod from "module_3997" /* 3997 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let module_3997 = module_3997_mod;
if (!module_3997) {
  const obj = { default: module_3997 };
  let tmp3 = obj;
} else {
  tmp3 = module_3997;
}
module_3997 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return module_3997.default(arg0, Date.now());
};
export default exports.default;
