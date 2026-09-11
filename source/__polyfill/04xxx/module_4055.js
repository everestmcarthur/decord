// Module ID: 4055
// Function ID: 4056
// Dependencies: [4047, 3696]
// Exports: default

// Module 4055
import module_4047_mod from "module_4047" /* 4047 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let module_4047 = module_4047_mod;
if (!module_4047) {
  const obj = { default: module_4047 };
  let tmp3 = obj;
} else {
  tmp3 = module_4047;
}
module_4047 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return module_4047.default(Date.now(), arg0);
};
export default exports.default;
