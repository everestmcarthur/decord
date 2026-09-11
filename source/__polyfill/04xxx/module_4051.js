// Module ID: 4051
// Function ID: 4052
// Dependencies: [4040, 3696]
// Exports: default

// Module 4051
import module_4040_mod from "module_4040" /* 4040 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let module_4040 = module_4040_mod;
if (!module_4040) {
  const obj = { default: module_4040 };
  let tmp3 = obj;
} else {
  tmp3 = module_4040;
}
module_4040 = tmp3;
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
  return module_4040.default(Date.now(), arg0);
};
export default exports.default;
