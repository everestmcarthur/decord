// Module ID: 4081
// Function ID: 4082
// Name: nextDay
// Dependencies: [3841, 3956, 3694]
// Exports: default

// Module 4081 (nextDay)
import module_3841_mod from "module_3841" /* 3841 */;
import module_3956_mod from "module_3956" /* 3956 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let module_3841 = module_3841_mod;
if (!module_3841) {
  const obj = { default: module_3841 };
  let tmp3 = obj;
} else {
  tmp3 = module_3841;
}
module_3841 = tmp3;
let module_3956 = module_3956_mod;
if (!module_3956) {
  const obj2 = { default: module_3956 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3956;
}
module_3956 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function nextDay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const diff = arg1 - module_3956.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_3841.default(arg0, sum);
};
export default exports.default;
