// Module ID: 4013
// Function ID: 4014
// Dependencies: [4005, 3651]
// Exports: default

// Module 4013
import module_4005_mod from "module_4005" /* 4005 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let module_4005 = module_4005_mod;
if (!module_4005) {
  const obj = { default: module_4005 };
  let tmp3 = obj;
} else {
  tmp3 = module_4005;
}
module_4005 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return module_4005.default(arg0, Date.now());
};
export default exports.default;
