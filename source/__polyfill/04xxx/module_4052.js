// Module ID: 4052
// Function ID: 4053
// Dependencies: [4044, 3694]
// Exports: default

// Module 4052
import module_4044_mod from "module_4044" /* 4044 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let module_4044 = module_4044_mod;
if (!module_4044) {
  const obj = { default: module_4044 };
  let tmp3 = obj;
} else {
  tmp3 = module_4044;
}
module_4044 = tmp3;
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
  return module_4044.default(Date.now(), arg0);
};
export default exports.default;
