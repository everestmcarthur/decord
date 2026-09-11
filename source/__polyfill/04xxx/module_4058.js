// Module ID: 4058
// Function ID: 4059
// Dependencies: [4050, 3696]
// Exports: default

// Module 4058
import module_4050_mod from "module_4050" /* 4050 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let module_4050 = module_4050_mod;
if (!module_4050) {
  const obj = { default: module_4050 };
  let tmp3 = obj;
} else {
  tmp3 = module_4050;
}
module_4050 = tmp3;
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
  return module_4050.default(arg0, Date.now());
};
export default exports.default;
