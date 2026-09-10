// Module ID: 4028
// Function ID: 4029
// Dependencies: [3844, 3664]
// Exports: default

// Module 4028
import module_3844_mod from "module_3844" /* 3844 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let module_3844 = module_3844_mod;
if (!module_3844) {
  const obj = { default: module_3844 };
  let tmp3 = obj;
} else {
  tmp3 = module_3844;
}
module_3844 = tmp3;
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
  return module_3844.default(arg0, Date.now());
};
export default exports.default;
