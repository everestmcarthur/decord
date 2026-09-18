// Module ID: 4089
// Function ID: 4090
// Name: subWeeks
// Dependencies: [3654, 3818, 3651]
// Exports: default

// Module 4089 (subWeeks)
import module_3654_mod from "module_3654" /* 3654 */;
import module_3818_mod from "module_3818" /* 3818 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let module_3654 = module_3654_mod;
if (!module_3654) {
  const obj = { default: module_3654 };
  let tmp3 = obj;
} else {
  tmp3 = module_3654;
}
module_3654 = tmp3;
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

export default function subWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3818.default(arg0, -module_3654.default(arg1));
};
export default exports.default;
