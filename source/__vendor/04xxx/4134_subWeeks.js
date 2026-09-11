// Module ID: 4134
// Function ID: 4135
// Name: subWeeks
// Dependencies: [3699, 3863, 3696]
// Exports: default

// Module 4134 (subWeeks)
import module_3699_mod from "module_3699" /* 3699 */;
import module_3863_mod from "module_3863" /* 3863 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let module_3699 = module_3699_mod;
if (!module_3699) {
  const obj = { default: module_3699 };
  let tmp3 = obj;
} else {
  tmp3 = module_3699;
}
module_3699 = tmp3;
let module_3863 = module_3863_mod;
if (!module_3863) {
  const obj2 = { default: module_3863 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3863;
}
module_3863 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3863.default(arg0, -module_3699.default(arg1));
};
export default exports.default;
