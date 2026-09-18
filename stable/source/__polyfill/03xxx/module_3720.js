// Module ID: 3720
// Function ID: 3721
// Dependencies: [3721, 3722, 3723, 3724, 3725]

// Module 3720
import module_3721 from "module_3721" /* 3721 */;
import module_3722 from "module_3722" /* 3722 */;
import module_3723 from "module_3723" /* 3723 */;
import date_mod from "module_3724" /* 3724 */;
import date_mod from "module_3725" /* 3725 */;

if (!module_3721) {
  const obj = { default: module_3721 };
  let tmp3 = obj;
} else {
  tmp3 = module_3721;
}
if (!module_3722) {
  const obj2 = { default: module_3722 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3722;
}
if (!module_3723) {
  const obj3 = { default: module_3723 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3723;
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

export default { code: "ja", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 0, firstWeekContainsDate: 1 } };
export default exports.default;
