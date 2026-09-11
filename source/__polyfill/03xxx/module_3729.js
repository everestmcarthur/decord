// Module ID: 3729
// Function ID: 3730
// Dependencies: [3730, 3731, 3732, 3733, 3734]

// Module 3729
import module_3730 from "module_3730" /* 3730 */;
import module_3731 from "module_3731" /* 3731 */;
import module_3732 from "module_3732" /* 3732 */;
import date_mod from "module_3733" /* 3733 */;
import date_mod from "module_3734" /* 3734 */;

if (!module_3730) {
  const obj = { default: module_3730 };
  let tmp3 = obj;
} else {
  tmp3 = module_3730;
}
if (!module_3731) {
  const obj2 = { default: module_3731 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3731;
}
if (!module_3732) {
  const obj3 = { default: module_3732 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3732;
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

export default { code: "es", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 1 } };
export default exports.default;
