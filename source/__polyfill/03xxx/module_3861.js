// Module ID: 3861
// Function ID: 3862
// Dependencies: [3697, 3841, 3694]
// Exports: default

// Module 3861
import module_3697_mod from "module_3697" /* 3697 */;
import module_3841_mod from "module_3841" /* 3841 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let module_3697 = module_3697_mod;
if (!module_3697) {
  const obj = { default: module_3697 };
  let tmp3 = obj;
} else {
  tmp3 = module_3697;
}
module_3697 = tmp3;
let module_3841 = module_3841_mod;
if (!module_3841) {
  const obj2 = { default: module_3841 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3841;
}
module_3841 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3841.default(arg0, 7 * module_3697.default(arg1));
};
export default exports.default;
