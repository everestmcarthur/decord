// Module ID: 3817
// Function ID: 3818
// Dependencies: [3667, 3818, 3664]
// Exports: default

// Module 3817
import module_3667_mod from "module_3667" /* 3667 */;
import module_3818_mod from "module_3818" /* 3818 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let module_3667 = module_3667_mod;
if (!module_3667) {
  const obj = { default: module_3667 };
  let tmp3 = obj;
} else {
  tmp3 = module_3667;
}
module_3667 = tmp3;
let module_3818 = module_3818_mod;
if (!module_3818) {
  const obj2 = { default: module_3818 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3818;
}
module_3818 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 3600000;

export default function addHours(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_3818.default(interval, module_3667.default(arg1) * c3);
};
export default exports.default;
