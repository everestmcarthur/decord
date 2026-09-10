// Module ID: 3781
// Function ID: 3782
// Dependencies: [3782, 3783, 3784, 3785, 3786]

// Module 3781
import module_3782 from "module_3782" /* 3782 */;
import module_3783 from "module_3783" /* 3783 */;
import module_3784 from "module_3784" /* 3784 */;
import date_mod from "module_3785" /* 3785 */;
import date_mod from "module_3786" /* 3786 */;

if (!module_3782) {
  const obj = { default: module_3782 };
  let tmp3 = obj;
} else {
  tmp3 = module_3782;
}
if (!module_3783) {
  const obj2 = { default: module_3783 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3783;
}
if (!module_3784) {
  const obj3 = { default: module_3784 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3784;
}
let date = date_mod;
if (!date) {
  const obj4 = { default: date };
  let tmp9 = obj4;
} else {
  tmp9 = date;
}
let date = date_mod;
if (!date) {
  const obj5 = { default: date };
  let tmp11 = obj5;
} else {
  tmp11 = date;
}

export default { code: "nl", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;
