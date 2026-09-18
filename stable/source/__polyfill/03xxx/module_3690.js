// Module ID: 3690
// Function ID: 3691
// Dependencies: [3691, 3692, 3693, 3694, 3695]

// Module 3690
import futureSeconds from "futureSeconds" /* 3691 */;
import module_3692 from "module_3692" /* 3692 */;
import module_3693 from "module_3693" /* 3693 */;
import date_mod from "module_3694" /* 3694 */;
import date_mod from "module_3695" /* 3695 */;

if (!futureSeconds) {
  const obj = { default: futureSeconds };
  let tmp3 = obj;
} else {
  tmp3 = futureSeconds;
}
if (!module_3692) {
  const obj2 = { default: module_3692 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3692;
}
if (!module_3693) {
  const obj3 = { default: module_3693 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3693;
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

export default { code: "fi", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;
