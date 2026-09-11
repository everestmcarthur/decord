// Module ID: 4061
// Function ID: 4062
// Dependencies: [3843, 3876, 3696]
// Exports: default

// Module 4061
import module_3843_mod from "module_3843" /* 3843 */;
import module_3876_mod from "module_3876" /* 3876 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let module_3843 = module_3843_mod;
if (!module_3843) {
  const obj = { default: module_3843 };
  let tmp3 = obj;
} else {
  tmp3 = module_3843;
}
module_3843 = tmp3;
let module_3876 = module_3876_mod;
if (!module_3876) {
  const obj2 = { default: module_3876 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3876;
}
module_3876 = tmp5;
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
  return module_3876.default(arg0, module_3843.default(Date.now(), 1));
};
export default exports.default;
