// Module ID: 3930
// Function ID: 3931
// Dependencies: [3929, 3651]
// Exports: default

// Module 3930
import module_3929_mod from "module_3929" /* 3929 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let module_3929 = module_3929_mod;
if (!module_3929) {
  const obj = { default: module_3929 };
  let tmp3 = obj;
} else {
  tmp3 = module_3929;
}
module_3929 = tmp3;
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
  return Math.floor(module_3929.default(arg0) / 1000);
};
export default exports.default;
