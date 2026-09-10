// Module ID: 4021
// Function ID: 4022
// Dependencies: [4013, 3664]
// Exports: default

// Module 4021
import module_4013_mod from "module_4013" /* 4013 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let module_4013 = module_4013_mod;
if (!module_4013) {
  const obj = { default: module_4013 };
  let tmp3 = obj;
} else {
  tmp3 = module_4013;
}
module_4013 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMinute(arg0) {
  requiredArgs.default(1, arguments);
  return module_4013.default(Date.now(), arg0);
};
export default exports.default;
