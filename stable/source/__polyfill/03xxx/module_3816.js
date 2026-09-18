// Module ID: 3816
// Function ID: 3817
// Dependencies: [3654, 3799, 3651]
// Exports: default

// Module 3816
import module_3654_mod from "module_3654" /* 3654 */;
import module_3799_mod from "module_3799" /* 3799 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let module_3654 = module_3654_mod;
if (!module_3654) {
  const obj = { default: module_3654 };
  let tmp3 = obj;
} else {
  tmp3 = module_3654;
}
module_3654 = tmp3;
let module_3799 = module_3799_mod;
if (!module_3799) {
  const obj2 = { default: module_3799 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3799;
}
module_3799 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3799.default(arg0, 3 * module_3654.default(arg1));
};
export default exports.default;
