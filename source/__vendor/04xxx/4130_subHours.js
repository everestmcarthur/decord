// Module ID: 4130
// Function ID: 4131
// Name: subHours
// Dependencies: [3849, 3696, 3699]
// Exports: default

// Module 4130 (subHours)
import module_3849_mod from "module_3849" /* 3849 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;
import module_3699_mod from "module_3699" /* 3699 */;

let module_3849 = module_3849_mod;
if (!module_3849) {
  const obj = { default: module_3849 };
  let tmp3 = obj;
} else {
  tmp3 = module_3849;
}
module_3849 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3699 = module_3699_mod;
if (!module_3699) {
  const obj3 = { default: module_3699 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3699;
}
module_3699 = tmp7;

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3849.default(arg0, -module_3699.default(arg1));
};
export default exports.default;
