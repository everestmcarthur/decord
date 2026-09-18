// Module ID: 3903
// Function ID: 3904
// Dependencies: [3901, 3651]
// Exports: default

// Module 3903
import module_3901_mod from "module_3901" /* 3901 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let module_3901 = module_3901_mod;
if (!module_3901) {
  const obj = { default: module_3901 };
  let tmp3 = obj;
} else {
  tmp3 = module_3901;
}
module_3901 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNowStrict(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_3901.default(arg0, Date.now(), arg1);
};
export default exports.default;
