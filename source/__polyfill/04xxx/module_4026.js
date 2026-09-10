// Module ID: 4026
// Function ID: 4027
// Dependencies: [4018, 3664]
// Exports: default

// Module 4026
import module_4018_mod from "module_4018" /* 4018 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let module_4018 = module_4018_mod;
if (!module_4018) {
  const obj = { default: module_4018 };
  let tmp3 = obj;
} else {
  tmp3 = module_4018;
}
module_4018 = tmp3;
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
  return module_4018.default(arg0, Date.now());
};
export default exports.default;
