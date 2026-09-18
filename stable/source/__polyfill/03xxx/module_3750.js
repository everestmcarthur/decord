// Module ID: 3750
// Function ID: 3751
// Dependencies: [3751, 3752, 3753, 3754, 3755]

// Module 3750
import module_3751 from "module_3751" /* 3751 */;
import module_3752 from "module_3752" /* 3752 */;
import dayAndTimeWithAdjective from "dayAndTimeWithAdjective" /* 3753 */;
import date_mod from "module_3754" /* 3754 */;
import date_mod from "module_3755" /* 3755 */;

if (!module_3751) {
  const obj = { default: module_3751 };
  let tmp3 = obj;
} else {
  tmp3 = module_3751;
}
if (!module_3752) {
  const obj2 = { default: module_3752 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3752;
}
if (!dayAndTimeWithAdjective) {
  const obj3 = { default: dayAndTimeWithAdjective };
  let tmp7 = obj3;
} else {
  tmp7 = dayAndTimeWithAdjective;
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

export default { code: "pl", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;
