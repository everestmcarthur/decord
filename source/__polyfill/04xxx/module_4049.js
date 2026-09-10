// Module ID: 4049
// Function ID: 4050
// Dependencies: [4038, 3694]
// Exports: default

// Module 4049
import module_4038_mod from "module_4038" /* 4038 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let module_4038 = module_4038_mod;
if (!module_4038) {
  const obj = { default: module_4038 };
  let tmp3 = obj;
} else {
  tmp3 = module_4038;
}
module_4038 = tmp3;
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
  return module_4038.default(Date.now(), arg0);
};
export default exports.default;
