// Module ID: 4063
// Function ID: 4064
// Dependencies: [3874, 4064, 3694]
// Exports: default

// Module 4063
import module_3874_mod from "module_3874" /* 3874 */;
import subDays_mod from "subDays" /* 4064 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let module_3874 = module_3874_mod;
if (!module_3874) {
  const obj = { default: module_3874 };
  let tmp3 = obj;
} else {
  tmp3 = module_3874;
}
module_3874 = tmp3;
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
  return module_3874.default(arg0, subDays.default(Date.now(), 1));
};
export default exports.default;
