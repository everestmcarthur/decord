// Module ID: 3915
// Function ID: 3916
// Dependencies: [3911, 3664]
// Exports: default

// Module 3915
import module_3911_mod from "module_3911" /* 3911 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let module_3911 = module_3911_mod;
if (!module_3911) {
  const obj = { default: module_3911 };
  let tmp3 = obj;
} else {
  tmp3 = module_3911;
}
module_3911 = tmp3;
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
  return module_3911.default(arg0, Date.now(), arg1);
};
export default exports.default;
