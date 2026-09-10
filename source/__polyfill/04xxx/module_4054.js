// Module ID: 4054
// Function ID: 4055
// Dependencies: [4046, 3694]
// Exports: default

// Module 4054
import module_4046_mod from "module_4046" /* 4046 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let module_4046 = module_4046_mod;
if (!module_4046) {
  const obj = { default: module_4046 };
  let tmp3 = obj;
} else {
  tmp3 = module_4046;
}
module_4046 = tmp3;
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
  return module_4046.default(Date.now(), arg0);
};
export default exports.default;
