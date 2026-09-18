// Module ID: 4009
// Function ID: 4010
// Dependencies: [4001, 3651]
// Exports: default

// Module 4009
import module_4001_mod from "module_4001" /* 4001 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let module_4001 = module_4001_mod;
if (!module_4001) {
  const obj = { default: module_4001 };
  let tmp3 = obj;
} else {
  tmp3 = module_4001;
}
module_4001 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMonth(arg0) {
  requiredArgs.default(1, arguments);
  return module_4001.default(Date.now(), arg0);
};
export default exports.default;
