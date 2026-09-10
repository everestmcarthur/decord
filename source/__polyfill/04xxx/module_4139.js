// Module ID: 4139
// Function ID: 4140
// Dependencies: [4140, 4141, 4142, 4143, 4144]

// Module 4139
import module_4140 from "module_4140" /* 4140 */;
import module_4141 from "module_4141" /* 4141 */;
import module_4142 from "module_4142" /* 4142 */;
import date_mod from "module_4143" /* 4143 */;
import date_mod from "module_4144" /* 4144 */;

if (!module_4140) {
  const obj = { default: module_4140 };
  let tmp3 = obj;
} else {
  tmp3 = module_4140;
}
if (!module_4141) {
  const obj2 = { default: module_4141 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4141;
}
if (!module_4142) {
  const obj3 = { default: module_4142 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4142;
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

export default { code: "vi", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 1 } };
export default exports.default;
