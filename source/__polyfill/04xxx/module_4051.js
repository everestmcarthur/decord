// Module ID: 4051
// Function ID: 4052
// Dependencies: [4043, 3694]
// Exports: default

// Module 4051
import module_4043_mod from "module_4043" /* 4043 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let module_4043 = module_4043_mod;
if (!module_4043) {
  const obj = { default: module_4043 };
  let tmp3 = obj;
} else {
  tmp3 = module_4043;
}
module_4043 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMinute(arg0) {
  requiredArgs.default(1, arguments);
  return module_4043.default(Date.now(), arg0);
};
export default exports.default;
