// Module ID: 3775
// Function ID: 3776
// Dependencies: [3776, 3777, 3778, 3779, 3780]

// Module 3775
import module_3776 from "module_3776" /* 3776 */;
import module_3777 from "module_3777" /* 3777 */;
import module_3778 from "module_3778" /* 3778 */;
import date_mod from "module_3779" /* 3779 */;
import date_mod from "module_3780" /* 3780 */;

if (!module_3776) {
  const obj = { default: module_3776 };
  let tmp3 = obj;
} else {
  tmp3 = module_3776;
}
if (!module_3777) {
  const obj2 = { default: module_3777 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3777;
}
if (!module_3778) {
  const obj3 = { default: module_3778 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3778;
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

export default { code: "ro", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 1 } };
export default exports.default;
