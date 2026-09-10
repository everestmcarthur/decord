// Module ID: 3683
// Function ID: 3684
// Dependencies: [3684, 3685, 3686, 3687, 3688]

// Module 3683
import module_3684 from "module_3684" /* 3684 */;
import module_3685 from "module_3685" /* 3685 */;
import module_3686 from "module_3686" /* 3686 */;
import date_mod from "module_3687" /* 3687 */;
import date_mod from "module_3688" /* 3688 */;

if (!module_3684) {
  const obj = { default: module_3684 };
  let tmp3 = obj;
} else {
  tmp3 = module_3684;
}
if (!module_3685) {
  const obj2 = { default: module_3685 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3685;
}
if (!module_3686) {
  const obj3 = { default: module_3686 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3686;
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

export default { code: "de", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;
