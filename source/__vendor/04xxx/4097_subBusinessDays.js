// Module ID: 4097
// Function ID: 4098
// Name: subBusinessDays
// Dependencies: [3813, 3664, 3667]
// Exports: default

// Module 4097 (subBusinessDays)
import module_3813_mod from "module_3813" /* 3813 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;
import module_3667_mod from "module_3667" /* 3667 */;

let module_3813 = module_3813_mod;
if (!module_3813) {
  const obj = { default: module_3813 };
  let tmp3 = obj;
} else {
  tmp3 = module_3813;
}
module_3813 = tmp3;
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

export default function subBusinessDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3813.default(arg0, -module_3667.default(arg1));
};
export default exports.default;
