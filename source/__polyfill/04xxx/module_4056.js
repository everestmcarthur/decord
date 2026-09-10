// Module ID: 4056
// Function ID: 4057
// Dependencies: [4048, 3694]
// Exports: default

// Module 4056
import module_4048_mod from "module_4048" /* 4048 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let module_4048 = module_4048_mod;
if (!module_4048) {
  const obj = { default: module_4048 };
  let tmp3 = obj;
} else {
  tmp3 = module_4048;
}
module_4048 = tmp3;
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
  return module_4048.default(arg0, Date.now());
};
export default exports.default;
