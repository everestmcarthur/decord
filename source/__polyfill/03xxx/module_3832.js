// Module ID: 3832
// Function ID: 3833
// Dependencies: [3667, 3812, 3664]
// Exports: default

// Module 3832
import module_3667_mod from "module_3667" /* 3667 */;
import module_3812_mod from "module_3812" /* 3812 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let module_3667 = module_3667_mod;
if (!module_3667) {
  const obj = { default: module_3667 };
  let tmp3 = obj;
} else {
  tmp3 = module_3667;
}
module_3667 = tmp3;
let module_3812 = module_3812_mod;
if (!module_3812) {
  const obj2 = { default: module_3812 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3812;
}
module_3812 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addYears(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_3812.default(interval, 12 * module_3667.default(arg1));
};
export default exports.default;
