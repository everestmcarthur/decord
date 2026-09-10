// Module ID: 3835
// Function ID: 3836
// Dependencies: [3836, 3837, 3838, 4137, 4138]

// Module 3835
import module_3836 from "module_3836" /* 3836 */;
import module_3837 from "module_3837" /* 3837 */;
import module_3838 from "module_3838" /* 3838 */;
import date_mod from "module_4137" /* 4137 */;
import date_mod from "module_4138" /* 4138 */;

if (!module_3836) {
  const obj = { default: module_3836 };
  let tmp3 = obj;
} else {
  tmp3 = module_3836;
}
if (!module_3837) {
  const obj2 = { default: module_3837 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3837;
}
if (!module_3838) {
  const obj3 = { default: module_3838 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3838;
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

export default { code: "uk", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 1 } };
export default exports.default;
