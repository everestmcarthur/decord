// Module ID: 3646
// Function ID: 3647
// Dependencies: [3647, 3648, 3649, 3656, 3657]

// Module 3646
import module_3647 from "module_3647" /* 3647 */;
import module_3648 from "module_3648" /* 3648 */;
import module_3649 from "module_3649" /* 3649 */;
import date_mod from "module_3656" /* 3656 */;
import date_mod from "module_3657" /* 3657 */;

if (!module_3647) {
  const obj = { default: module_3647 };
  let tmp3 = obj;
} else {
  tmp3 = module_3647;
}
if (!module_3648) {
  const obj2 = { default: module_3648 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3648;
}
if (!module_3649) {
  const obj3 = { default: module_3649 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3649;
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

export default { code: "bg", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 1 } };
export default exports.default;
