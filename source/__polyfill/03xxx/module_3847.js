// Module ID: 3847
// Function ID: 3848
// Dependencies: [3697, 3848, 3694]
// Exports: default

// Module 3847
import module_3697_mod from "module_3697" /* 3697 */;
import module_3848_mod from "module_3848" /* 3848 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let module_3697 = module_3697_mod;
if (!module_3697) {
  const obj = { default: module_3697 };
  let tmp3 = obj;
} else {
  tmp3 = module_3697;
}
module_3697 = tmp3;
let module_3848 = module_3848_mod;
if (!module_3848) {
  const obj2 = { default: module_3848 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3848;
}
module_3848 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 3600000;

export default function addHours(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_3848.default(interval, module_3697.default(arg1) * c3);
};
export default exports.default;
