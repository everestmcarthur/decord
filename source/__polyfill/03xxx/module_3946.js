// Module ID: 3946
// Function ID: 3947
// Dependencies: [3944, 3694]
// Exports: default

// Module 3946
import module_3944_mod from "module_3944" /* 3944 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let module_3944 = module_3944_mod;
if (!module_3944) {
  const obj = { default: module_3944 };
  let tmp3 = obj;
} else {
  tmp3 = module_3944;
}
module_3944 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNowStrict(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_3944.default(arg0, Date.now(), arg1);
};
export default exports.default;
