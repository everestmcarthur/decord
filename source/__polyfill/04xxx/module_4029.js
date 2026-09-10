// Module ID: 4029
// Function ID: 4030
// Dependencies: [3811, 3844, 3664]
// Exports: default

// Module 4029
import module_3811_mod from "module_3811" /* 3811 */;
import module_3844_mod from "module_3844" /* 3844 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let module_3811 = module_3811_mod;
if (!module_3811) {
  const obj = { default: module_3811 };
  let tmp3 = obj;
} else {
  tmp3 = module_3811;
}
module_3811 = tmp3;
let module_3844 = module_3844_mod;
if (!module_3844) {
  const obj2 = { default: module_3844 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3844;
}
module_3844 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_3844.default(arg0, module_3811.default(Date.now(), 1));
};
export default exports.default;
