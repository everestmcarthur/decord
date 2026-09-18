// Module ID: 4084
// Function ID: 4085
// Name: subBusinessDays
// Dependencies: [3800, 3651, 3654]
// Exports: default

// Module 4084 (subBusinessDays)
import module_3800_mod from "module_3800" /* 3800 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;
import module_3654_mod from "module_3654" /* 3654 */;

let module_3800 = module_3800_mod;
if (!module_3800) {
  const obj = { default: module_3800 };
  let tmp3 = obj;
} else {
  tmp3 = module_3800;
}
module_3800 = tmp3;
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

export default function subBusinessDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3800.default(arg0, -module_3654.default(arg1));
};
export default exports.default;
