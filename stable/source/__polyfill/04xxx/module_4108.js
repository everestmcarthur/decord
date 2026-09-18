// Module ID: 4108
// Function ID: 4109
// Dependencies: [4109, 4110, 4111, 4112, 4113]

// Module 4108
import module_4109 from "module_4109" /* 4109 */;
import module_4110 from "module_4110" /* 4110 */;
import module_4111 from "module_4111" /* 4111 */;
import date_mod from "module_4112" /* 4112 */;
import date_mod from "module_4113" /* 4113 */;

if (!module_4109) {
  const obj = { default: module_4109 };
  let tmp3 = obj;
} else {
  tmp3 = module_4109;
}
if (!module_4110) {
  const obj2 = { default: module_4110 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4110;
}
if (!module_4111) {
  const obj3 = { default: module_4111 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4111;
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
