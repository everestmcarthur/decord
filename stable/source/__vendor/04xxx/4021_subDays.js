// Module ID: 4021
// Function ID: 4022
// Name: subDays
// Dependencies: [3798, 3651, 3654]
// Exports: default

// Module 4021 (subDays)
import module_3798_mod from "module_3798" /* 3798 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;
import module_3654_mod from "module_3654" /* 3654 */;

let module_3798 = module_3798_mod;
if (!module_3798) {
  const obj = { default: module_3798 };
  let tmp3 = obj;
} else {
  tmp3 = module_3798;
}
module_3798 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3654 = module_3654_mod;
if (!module_3654) {
  const obj3 = { default: module_3654 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3654;
}
module_3654 = tmp7;

export default function subDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3798.default(arg0, -module_3654.default(arg1));
};
export default exports.default;
