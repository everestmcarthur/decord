// Module ID: 3777
// Function ID: 3778
// Dependencies: [3778, 3779, 3780, 3781, 3782]

// Module 3777
import translateSeconds from "translateSeconds" /* 3778 */;
import module_3779 from "module_3779" /* 3779 */;
import module_3780 from "module_3780" /* 3780 */;
import date_mod from "module_3781" /* 3781 */;
import date_mod from "module_3782" /* 3782 */;

if (!translateSeconds) {
  const obj = { default: translateSeconds };
  let tmp3 = obj;
} else {
  tmp3 = translateSeconds;
}
if (!module_3779) {
  const obj2 = { default: module_3779 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3779;
}
if (!module_3780) {
  const obj3 = { default: module_3780 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3780;
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

export default { code: "lt", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;
