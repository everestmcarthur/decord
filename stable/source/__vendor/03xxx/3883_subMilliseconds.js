// Module ID: 3883
// Function ID: 3884
// Name: subMilliseconds
// Dependencies: [3805, 3651, 3654]
// Exports: default

// Module 3883 (subMilliseconds)
import module_3805_mod from "module_3805" /* 3805 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;
import module_3654_mod from "module_3654" /* 3654 */;

let module_3805 = module_3805_mod;
if (!module_3805) {
  const obj = { default: module_3805 };
  let tmp3 = obj;
} else {
  tmp3 = module_3805;
}
module_3805 = tmp3;
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

export default function subMilliseconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3805.default(arg0, -module_3654.default(arg1));
};
export default exports.default;
