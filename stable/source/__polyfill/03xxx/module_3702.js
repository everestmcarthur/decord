// Module ID: 3702
// Function ID: 3703
// Dependencies: [3703, 3704, 3705, 3706, 3707]

// Module 3702
import module_3703 from "module_3703" /* 3703 */;
import module_3704 from "module_3704" /* 3704 */;
import module_3705 from "module_3705" /* 3705 */;
import date_mod from "module_3706" /* 3706 */;
import date_mod from "module_3707" /* 3707 */;

if (!module_3703) {
  const obj = { default: module_3703 };
  let tmp3 = obj;
} else {
  tmp3 = module_3703;
}
if (!module_3704) {
  const obj2 = { default: module_3704 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3704;
}
if (!module_3705) {
  const obj3 = { default: module_3705 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3705;
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

export default { code: "hr", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 1 } };
export default exports.default;
