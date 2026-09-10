// Module ID: 3943
// Function ID: 3944
// Dependencies: [3942, 3664]
// Exports: default

// Module 3943
import module_3942_mod from "module_3942" /* 3942 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let module_3942 = module_3942_mod;
if (!module_3942) {
  const obj = { default: module_3942 };
  let tmp3 = obj;
} else {
  tmp3 = module_3942;
}
module_3942 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function getUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(module_3942.default(arg0) / 1000);
};
export default exports.default;
