// Module ID: 4022
// Function ID: 4023
// Dependencies: [4014, 3664]
// Exports: default

// Module 4022
import module_4014_mod from "module_4014" /* 4014 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let module_4014 = module_4014_mod;
if (!module_4014) {
  const obj = { default: module_4014 };
  let tmp3 = obj;
} else {
  tmp3 = module_4014;
}
module_4014 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMonth(arg0) {
  requiredArgs.default(1, arguments);
  return module_4014.default(Date.now(), arg0);
};
export default exports.default;
