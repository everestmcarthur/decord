// Module ID: 4033
// Function ID: 4034
// Dependencies: [3844, 4034, 3664]
// Exports: default

// Module 4033
import module_3844_mod from "module_3844" /* 3844 */;
import subDays_mod from "subDays" /* 4034 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let module_3844 = module_3844_mod;
if (!module_3844) {
  const obj = { default: module_3844 };
  let tmp3 = obj;
} else {
  tmp3 = module_3844;
}
module_3844 = tmp3;
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
  return module_3844.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;
