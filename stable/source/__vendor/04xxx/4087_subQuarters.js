// Module ID: 4087
// Function ID: 4088
// Name: subQuarters
// Dependencies: [3654, 3816, 3651]
// Exports: default

// Module 4087 (subQuarters)
import module_3654_mod from "module_3654" /* 3654 */;
import module_3816_mod from "module_3816" /* 3816 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let module_3654 = module_3654_mod;
if (!module_3654) {
  const obj = { default: module_3654 };
  let tmp3 = obj;
} else {
  tmp3 = module_3654;
}
module_3654 = tmp3;
let module_3816 = module_3816_mod;
if (!module_3816) {
  const obj2 = { default: module_3816 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3816;
}
module_3816 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3816.default(arg0, -module_3654.default(arg1));
};
export default exports.default;
