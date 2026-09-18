// Module ID: 4010
// Function ID: 4011
// Dependencies: [4002, 3651]
// Exports: default

// Module 4010
import module_4002_mod from "module_4002" /* 4002 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let module_4002 = module_4002_mod;
if (!module_4002) {
  const obj = { default: module_4002 };
  let tmp3 = obj;
} else {
  tmp3 = module_4002;
}
module_4002 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return module_4002.default(Date.now(), arg0);
};
export default exports.default;
