// Module ID: 3973
// Function ID: 3974
// Dependencies: [3972, 3694]
// Exports: default

// Module 3973
import module_3972_mod from "module_3972" /* 3972 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let module_3972 = module_3972_mod;
if (!module_3972) {
  const obj = { default: module_3972 };
  let tmp3 = obj;
} else {
  tmp3 = module_3972;
}
module_3972 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function getUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(module_3972.default(arg0) / 1000);
};
export default exports.default;
