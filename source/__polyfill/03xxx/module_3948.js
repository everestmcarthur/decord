// Module ID: 3948
// Function ID: 3949
// Dependencies: [3946, 3696]
// Exports: default

// Module 3948
import module_3946_mod from "module_3946" /* 3946 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let module_3946 = module_3946_mod;
if (!module_3946) {
  const obj = { default: module_3946 };
  let tmp3 = obj;
} else {
  tmp3 = module_3946;
}
module_3946 = tmp3;
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
  return module_3946.default(arg0, Date.now(), arg1);
};
export default exports.default;
