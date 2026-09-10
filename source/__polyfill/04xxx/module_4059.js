// Module ID: 4059
// Function ID: 4060
// Dependencies: [3841, 3874, 3694]
// Exports: default

// Module 4059
import module_3841_mod from "module_3841" /* 3841 */;
import module_3874_mod from "module_3874" /* 3874 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let module_3841 = module_3841_mod;
if (!module_3841) {
  const obj = { default: module_3841 };
  let tmp3 = obj;
} else {
  tmp3 = module_3841;
}
module_3841 = tmp3;
let module_3874 = module_3874_mod;
if (!module_3874) {
  const obj2 = { default: module_3874 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3874;
}
module_3874 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_3874.default(arg0, module_3841.default(Date.now(), 1));
};
export default exports.default;
