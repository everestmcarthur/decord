// Module ID: 4248
// Function ID: 4249
// Name: subQuarters
// Dependencies: [3815, 3977, 3812]
// Exports: default

// Module 4248 (subQuarters)
import module_3815_mod from "module_3815" /* 3815 */;
import module_3977_mod from "module_3977" /* 3977 */;
import requiredArgs_mod from "requiredArgs" /* 3812 */;

let module_3815 = module_3815_mod;
if (!module_3815) {
  const obj = { default: module_3815 };
  let tmp3 = obj;
} else {
  tmp3 = module_3815;
}
module_3815 = tmp3;
let module_3977 = module_3977_mod;
if (!module_3977) {
  const obj2 = { default: module_3977 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3977;
}
module_3977 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3977.default(arg0, -module_3815.default(arg1));
};
export default exports.default;
