// Module ID: 4008
// Function ID: 4009
// Dependencies: [4000, 3651]
// Exports: default

// Module 4008
import module_4000_mod from "module_4000" /* 4000 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let module_4000 = module_4000_mod;
if (!module_4000) {
  const obj = { default: module_4000 };
  let tmp3 = obj;
} else {
  tmp3 = module_4000;
}
module_4000 = tmp3;
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
  return module_4000.default(Date.now(), arg0);
};
export default exports.default;
