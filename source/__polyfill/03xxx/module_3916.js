// Module ID: 3916
// Function ID: 3917
// Dependencies: [3914, 3664]
// Exports: default

// Module 3916
import module_3914_mod from "module_3914" /* 3914 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let module_3914 = module_3914_mod;
if (!module_3914) {
  const obj = { default: module_3914 };
  let tmp3 = obj;
} else {
  tmp3 = module_3914;
}
module_3914 = tmp3;
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
  return module_3914.default(arg0, Date.now(), arg1);
};
export default exports.default;
