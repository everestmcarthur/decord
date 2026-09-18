// Module ID: 3902
// Function ID: 3903
// Dependencies: [3898, 3651]
// Exports: default

// Module 3902
import module_3898_mod from "module_3898" /* 3898 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let module_3898 = module_3898_mod;
if (!module_3898) {
  const obj = { default: module_3898 };
  let tmp3 = obj;
} else {
  tmp3 = module_3898;
}
module_3898 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNow(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_3898.default(arg0, Date.now(), arg1);
};
export default exports.default;
