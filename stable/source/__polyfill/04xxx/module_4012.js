// Module ID: 4012
// Function ID: 4013
// Dependencies: [3998, 3651]
// Exports: default

// Module 4012
import module_3998_mod from "module_3998" /* 3998 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let module_3998 = module_3998_mod;
if (!module_3998) {
  const obj = { default: module_3998 };
  let tmp3 = obj;
} else {
  tmp3 = module_3998;
}
module_3998 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisWeek(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_3998.default(arg0, Date.now(), arg1);
};
export default exports.default;
