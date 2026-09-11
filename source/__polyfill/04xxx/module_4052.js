// Module ID: 4052
// Function ID: 4053
// Dependencies: [4042, 3696]
// Exports: default

// Module 4052
import module_4042_mod from "module_4042" /* 4042 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let module_4042 = module_4042_mod;
if (!module_4042) {
  const obj = { default: module_4042 };
  let tmp3 = obj;
} else {
  tmp3 = module_4042;
}
module_4042 = tmp3;
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
  return module_4042.default(arg0, Date.now());
};
export default exports.default;
