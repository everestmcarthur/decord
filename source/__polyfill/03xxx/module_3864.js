// Module ID: 3864
// Function ID: 3865
// Dependencies: [3699, 3844, 3696]
// Exports: default

// Module 3864
import module_3699_mod from "module_3699" /* 3699 */;
import module_3844_mod from "module_3844" /* 3844 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let module_3699 = module_3699_mod;
if (!module_3699) {
  const obj = { default: module_3699 };
  let tmp3 = obj;
} else {
  tmp3 = module_3699;
}
module_3699 = tmp3;
let module_3844 = module_3844_mod;
if (!module_3844) {
  const obj2 = { default: module_3844 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3844;
}
module_3844 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addYears(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_3844.default(interval, 12 * module_3699.default(arg1));
};
export default exports.default;
