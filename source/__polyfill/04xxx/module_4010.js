// Module ID: 4010
// Function ID: 4011
// Dependencies: [4011, 3664]
// Exports: default

// Module 4010
import module_4011_mod from "module_4011" /* 4011 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let module_4011 = module_4011_mod;
if (!module_4011) {
  const obj = { default: module_4011 };
  let tmp3 = obj;
} else {
  tmp3 = module_4011;
}
module_4011 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4011.default(arg0, arg1, { weekStartsOn: 1 });
};
export default exports.default;
