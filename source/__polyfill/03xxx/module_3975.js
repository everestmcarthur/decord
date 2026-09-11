// Module ID: 3975
// Function ID: 3976
// Dependencies: [3974, 3696]
// Exports: default

// Module 3975
import module_3974_mod from "module_3974" /* 3974 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let module_3974 = module_3974_mod;
if (!module_3974) {
  const obj = { default: module_3974 };
  let tmp3 = obj;
} else {
  tmp3 = module_3974;
}
module_3974 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function getUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(module_3974.default(arg0) / 1000);
};
export default exports.default;
