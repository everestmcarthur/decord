// Module ID: 3896
// Function ID: 3897
// Name: subMilliseconds
// Dependencies: [3818, 3664, 3667]
// Exports: default

// Module 3896 (subMilliseconds)
import module_3818_mod from "module_3818" /* 3818 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;
import module_3667_mod from "module_3667" /* 3667 */;

let module_3818 = module_3818_mod;
if (!module_3818) {
  const obj = { default: module_3818 };
  let tmp3 = obj;
} else {
  tmp3 = module_3818;
}
module_3818 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3667 = module_3667_mod;
if (!module_3667) {
  const obj3 = { default: module_3667 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3667;
}
module_3667 = tmp7;

export default function subMilliseconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3818.default(arg0, -module_3667.default(arg1));
};
export default exports.default;
