// Module ID: 3703
// Function ID: 3704
// Dependencies: [3704, 3705, 3706, 3707, 3708]

// Module 3703
import module_3704 from "module_3704" /* 3704 */;
import module_3705 from "module_3705" /* 3705 */;
import module_3706 from "module_3706" /* 3706 */;
import date_mod from "module_3707" /* 3707 */;
import date_mod from "module_3708" /* 3708 */;

if (!module_3704) {
  const obj = { default: module_3704 };
  let tmp3 = obj;
} else {
  tmp3 = module_3704;
}
if (!module_3705) {
  const obj2 = { default: module_3705 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3705;
}
if (!module_3706) {
  const obj3 = { default: module_3706 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3706;
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

export default { code: "cs", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;
