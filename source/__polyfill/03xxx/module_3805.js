// Module ID: 3805
// Function ID: 3806
// Dependencies: [3806, 3807, 3808, 3809, 3810]

// Module 3805
import module_3806 from "module_3806" /* 3806 */;
import module_3807 from "module_3807" /* 3807 */;
import module_3808 from "module_3808" /* 3808 */;
import date_mod from "module_3809" /* 3809 */;
import date_mod from "module_3810" /* 3810 */;

if (!module_3806) {
  const obj = { default: module_3806 };
  let tmp3 = obj;
} else {
  tmp3 = module_3806;
}
if (!module_3807) {
  const obj2 = { default: module_3807 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3807;
}
if (!module_3808) {
  const obj3 = { default: module_3808 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3808;
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

export default { code: "ro", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 1 } };
export default exports.default;
