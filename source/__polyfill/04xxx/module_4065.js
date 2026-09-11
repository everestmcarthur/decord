// Module ID: 4065
// Function ID: 4066
// Dependencies: [3876, 4066, 3696]
// Exports: default

// Module 4065
import module_3876_mod from "module_3876" /* 3876 */;
import subDays_mod from "subDays" /* 4066 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let module_3876 = module_3876_mod;
if (!module_3876) {
  const obj = { default: module_3876 };
  let tmp3 = obj;
} else {
  tmp3 = module_3876;
}
module_3876 = tmp3;
let subDays = subDays_mod;
if (!subDays) {
  const obj2 = { default: subDays };
  let tmp5 = obj2;
} else {
  tmp5 = subDays;
}
subDays = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isYesterday(arg0) {
  requiredArgs.default(1, arguments);
  return module_3876.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;
