// Module ID: 3846
// Function ID: 3847
// Name: subISOWeekYears
// Dependencies: [3806, 3651, 3654]
// Exports: default

// Module 3846 (subISOWeekYears)
import module_3806_mod from "module_3806" /* 3806 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;
import module_3654_mod from "module_3654" /* 3654 */;

let module_3806 = module_3806_mod;
if (!module_3806) {
  const obj = { default: module_3806 };
  let tmp3 = obj;
} else {
  tmp3 = module_3806;
}
module_3806 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3654 = module_3654_mod;
if (!module_3654) {
  const obj3 = { default: module_3654 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3654;
}
module_3654 = tmp7;

export default function subISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3806.default(arg0, -module_3654.default(arg1));
};
export default exports.default;
