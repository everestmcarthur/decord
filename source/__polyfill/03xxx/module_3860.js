// Module ID: 3860
// Function ID: 3861
// Dependencies: [3699, 3850, 3696]
// Exports: default

// Module 3860
import module_3699_mod from "module_3699" /* 3699 */;
import module_3850_mod from "module_3850" /* 3850 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let module_3699 = module_3699_mod;
if (!module_3699) {
  const obj = { default: module_3699 };
  let tmp3 = obj;
} else {
  tmp3 = module_3699;
}
module_3699 = tmp3;
let module_3850 = module_3850_mod;
if (!module_3850) {
  const obj2 = { default: module_3850 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3850;
}
module_3850 = tmp5;
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
  return module_3850.default(interval, module_3699.default(arg1) * c3);
};
export default exports.default;
