// Module ID: 3818
// Function ID: 3819
// Dependencies: [3654, 3798, 3651]
// Exports: default

// Module 3818
import module_3654_mod from "module_3654" /* 3654 */;
import module_3798_mod from "module_3798" /* 3798 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let module_3654 = module_3654_mod;
if (!module_3654) {
  const obj = { default: module_3654 };
  let tmp3 = obj;
} else {
  tmp3 = module_3654;
}
module_3654 = tmp3;
let module_3798 = module_3798_mod;
if (!module_3798) {
  const obj2 = { default: module_3798 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3798;
}
module_3798 = tmp5;
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
  return module_3798.default(arg0, 7 * module_3654.default(arg1));
};
export default exports.default;
