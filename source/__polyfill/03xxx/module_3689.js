// Module ID: 3689
// Function ID: 3690
// Dependencies: [3690, 3691, 3692, 3699, 3700]

// Module 3689
import module_3690 from "module_3690" /* 3690 */;
import module_3691 from "module_3691" /* 3691 */;
import module_3692 from "module_3692" /* 3692 */;
import date_mod from "module_3699" /* 3699 */;
import date_mod from "module_3700" /* 3700 */;

if (!module_3690) {
  const obj = { default: module_3690 };
  let tmp3 = obj;
} else {
  tmp3 = module_3690;
}
if (!module_3691) {
  const obj2 = { default: module_3691 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3691;
}
if (!module_3692) {
  const obj3 = { default: module_3692 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3692;
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
