// Module ID: 3659
// Function ID: 3660
// Dependencies: [3660, 3661, 3662, 3669, 3670]

// Module 3659
import module_3660 from "module_3660" /* 3660 */;
import module_3661 from "module_3661" /* 3661 */;
import module_3662 from "module_3662" /* 3662 */;
import date_mod from "module_3669" /* 3669 */;
import date_mod from "module_3670" /* 3670 */;

if (!module_3660) {
  const obj = { default: module_3660 };
  let tmp3 = obj;
} else {
  tmp3 = module_3660;
}
if (!module_3661) {
  const obj2 = { default: module_3661 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3661;
}
if (!module_3662) {
  const obj3 = { default: module_3662 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3662;
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
