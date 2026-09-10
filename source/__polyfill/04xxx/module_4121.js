// Module ID: 4121
// Function ID: 4122
// Dependencies: [4122, 4123, 4124, 4125, 4126]

// Module 4121
import module_4122 from "module_4122" /* 4122 */;
import module_4123 from "module_4123" /* 4123 */;
import module_4124 from "module_4124" /* 4124 */;
import date_mod from "module_4125" /* 4125 */;
import date_mod from "module_4126" /* 4126 */;

if (!module_4122) {
  const obj = { default: module_4122 };
  let tmp3 = obj;
} else {
  tmp3 = module_4122;
}
if (!module_4123) {
  const obj2 = { default: module_4123 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4123;
}
if (!module_4124) {
  const obj3 = { default: module_4124 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4124;
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

export default { code: "zh-TW", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;
