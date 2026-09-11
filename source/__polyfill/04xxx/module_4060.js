// Module ID: 4060
// Function ID: 4061
// Dependencies: [3876, 3696]
// Exports: default

// Module 4060
import module_3876_mod from "module_3876" /* 3876 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let module_3876 = module_3876_mod;
if (!module_3876) {
  const obj = { default: module_3876 };
  let tmp3 = obj;
} else {
  tmp3 = module_3876;
}
module_3876 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_3876.default(arg0, Date.now());
};
export default exports.default;
