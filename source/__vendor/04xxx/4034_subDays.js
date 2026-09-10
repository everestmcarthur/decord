// Module ID: 4034
// Function ID: 4035
// Name: subDays
// Dependencies: [3811, 3664, 3667]
// Exports: default

// Module 4034 (subDays)
import module_3811_mod from "module_3811" /* 3811 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;
import module_3667_mod from "module_3667" /* 3667 */;

let module_3811 = module_3811_mod;
if (!module_3811) {
  const obj = { default: module_3811 };
  let tmp3 = obj;
} else {
  tmp3 = module_3811;
}
module_3811 = tmp3;
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

export default function subDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3811.default(arg0, -module_3667.default(arg1));
};
export default exports.default;
