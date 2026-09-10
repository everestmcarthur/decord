// Module ID: 4019
// Function ID: 4020
// Dependencies: [4008, 3664]
// Exports: default

// Module 4019
import module_4008_mod from "module_4008" /* 4008 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let module_4008 = module_4008_mod;
if (!module_4008) {
  const obj = { default: module_4008 };
  let tmp3 = obj;
} else {
  tmp3 = module_4008;
}
module_4008 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisHour(arg0) {
  requiredArgs.default(1, arguments);
  return module_4008.default(Date.now(), arg0);
};
export default exports.default;
