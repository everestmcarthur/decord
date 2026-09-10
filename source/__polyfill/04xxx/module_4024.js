// Module ID: 4024
// Function ID: 4025
// Dependencies: [4016, 3664]
// Exports: default

// Module 4024
import module_4016_mod from "module_4016" /* 4016 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let module_4016 = module_4016_mod;
if (!module_4016) {
  const obj = { default: module_4016 };
  let tmp3 = obj;
} else {
  tmp3 = module_4016;
}
module_4016 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisSecond(arg0) {
  requiredArgs.default(1, arguments);
  return module_4016.default(Date.now(), arg0);
};
export default exports.default;
