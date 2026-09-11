// Module ID: 4083
// Function ID: 4084
// Name: nextDay
// Dependencies: [3843, 3958, 3696]
// Exports: default

// Module 4083 (nextDay)
import module_3843_mod from "module_3843" /* 3843 */;
import module_3958_mod from "module_3958" /* 3958 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let module_3843 = module_3843_mod;
if (!module_3843) {
  const obj = { default: module_3843 };
  let tmp3 = obj;
} else {
  tmp3 = module_3843;
}
module_3843 = tmp3;
let module_3958 = module_3958_mod;
if (!module_3958) {
  const obj2 = { default: module_3958 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3958;
}
module_3958 = tmp5;
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
  const diff = arg1 - module_3958.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return module_3843.default(arg0, sum);
};
export default exports.default;
