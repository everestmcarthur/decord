// Module ID: 4053
// Function ID: 4054
// Dependencies: [4045, 3696]
// Exports: default

// Module 4053
import module_4045_mod from "module_4045" /* 4045 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let module_4045 = module_4045_mod;
if (!module_4045) {
  const obj = { default: module_4045 };
  let tmp3 = obj;
} else {
  tmp3 = module_4045;
}
module_4045 = tmp3;
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
  return module_4045.default(Date.now(), arg0);
};
export default exports.default;
