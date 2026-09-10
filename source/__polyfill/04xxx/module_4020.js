// Module ID: 4020
// Function ID: 4021
// Dependencies: [4010, 3664]
// Exports: default

// Module 4020
import module_4010_mod from "module_4010" /* 4010 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let module_4010 = module_4010_mod;
if (!module_4010) {
  const obj = { default: module_4010 };
  let tmp3 = obj;
} else {
  tmp3 = module_4010;
}
module_4010 = tmp3;
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
  return module_4010.default(arg0, Date.now());
};
export default exports.default;
