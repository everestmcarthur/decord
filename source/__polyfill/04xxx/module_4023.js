// Module ID: 4023
// Function ID: 4024
// Dependencies: [4015, 3664]
// Exports: default

// Module 4023
import module_4015_mod from "module_4015" /* 4015 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let module_4015 = module_4015_mod;
if (!module_4015) {
  const obj = { default: module_4015 };
  let tmp3 = obj;
} else {
  tmp3 = module_4015;
}
module_4015 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return module_4015.default(Date.now(), arg0);
};
export default exports.default;
