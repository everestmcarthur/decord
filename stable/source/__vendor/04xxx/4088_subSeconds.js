// Module ID: 4088
// Function ID: 4089
// Name: subSeconds
// Dependencies: [3654, 3817, 3651]
// Exports: default

// Module 4088 (subSeconds)
import module_3654_mod from "module_3654" /* 3654 */;
import module_3817_mod from "module_3817" /* 3817 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let module_3654 = module_3654_mod;
if (!module_3654) {
  const obj = { default: module_3654 };
  let tmp3 = obj;
} else {
  tmp3 = module_3654;
}
module_3654 = tmp3;
let module_3817 = module_3817_mod;
if (!module_3817) {
  const obj2 = { default: module_3817 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3817;
}
module_3817 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subSeconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3817.default(arg0, -module_3654.default(arg1));
};
export default exports.default;
