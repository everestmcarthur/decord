// Module ID: 4057
// Function ID: 4058
// Dependencies: [4043, 3696]
// Exports: default

// Module 4057
import module_4043_mod from "module_4043" /* 4043 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

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

export default function isThisWeek(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4043.default(arg0, Date.now(), arg1);
};
export default exports.default;
