// Module ID: 3945
// Function ID: 3946
// Dependencies: [3941, 3694]
// Exports: default

// Module 3945
import module_3941_mod from "module_3941" /* 3941 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let module_3941 = module_3941_mod;
if (!module_3941) {
  const obj = { default: module_3941 };
  let tmp3 = obj;
} else {
  tmp3 = module_3941;
}
module_3941 = tmp3;
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
  return module_3941.default(arg0, Date.now(), arg1);
};
export default exports.default;
