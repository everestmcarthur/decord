// Module ID: 4006
// Function ID: 4007
// Dependencies: [3995, 3651]
// Exports: default

// Module 4006
import module_3995_mod from "module_3995" /* 3995 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let module_3995 = module_3995_mod;
if (!module_3995) {
  const obj = { default: module_3995 };
  let tmp3 = obj;
} else {
  tmp3 = module_3995;
}
module_3995 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisHour(arg0) {
  requiredArgs.default(1, arguments);
  return module_3995.default(Date.now(), arg0);
};
export default exports.default;
