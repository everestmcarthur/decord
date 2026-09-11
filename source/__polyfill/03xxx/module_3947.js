// Module ID: 3947
// Function ID: 3948
// Dependencies: [3943, 3696]
// Exports: default

// Module 3947
import module_3943_mod from "module_3943" /* 3943 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let module_3943 = module_3943_mod;
if (!module_3943) {
  const obj = { default: module_3943 };
  let tmp3 = obj;
} else {
  tmp3 = module_3943;
}
module_3943 = tmp3;
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
  return module_3943.default(arg0, Date.now(), arg1);
};
export default exports.default;
