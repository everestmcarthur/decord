// Module ID: 3815
// Function ID: 3816
// Dependencies: [3654, 3805, 3651]
// Exports: default

// Module 3815
import module_3654_mod from "module_3654" /* 3654 */;
import module_3805_mod from "module_3805" /* 3805 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let module_3654 = module_3654_mod;
if (!module_3654) {
  const obj = { default: module_3654 };
  let tmp3 = obj;
} else {
  tmp3 = module_3654;
}
module_3654 = tmp3;
let module_3805 = module_3805_mod;
if (!module_3805) {
  const obj2 = { default: module_3805 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3805;
}
module_3805 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 60000;

export default function addMinutes(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_3805.default(interval, module_3654.default(arg1) * c3);
};
export default exports.default;
