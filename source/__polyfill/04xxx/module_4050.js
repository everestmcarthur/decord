// Module ID: 4050
// Function ID: 4051
// Dependencies: [4040, 3694]
// Exports: default

// Module 4050
import module_4040_mod from "module_4040" /* 4040 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let module_4040 = module_4040_mod;
if (!module_4040) {
  const obj = { default: module_4040 };
  let tmp3 = obj;
} else {
  tmp3 = module_4040;
}
module_4040 = tmp3;
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
  return module_4040.default(arg0, Date.now());
};
export default exports.default;
