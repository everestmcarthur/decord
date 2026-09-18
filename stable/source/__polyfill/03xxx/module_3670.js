// Module ID: 3670
// Function ID: 3671
// Dependencies: [3671, 3672, 3673, 3674, 3675]

// Module 3670
import module_3671 from "module_3671" /* 3671 */;
import module_3672 from "module_3672" /* 3672 */;
import module_3673 from "module_3673" /* 3673 */;
import date_mod from "module_3674" /* 3674 */;
import date_mod from "module_3675" /* 3675 */;

if (!module_3671) {
  const obj = { default: module_3671 };
  let tmp3 = obj;
} else {
  tmp3 = module_3671;
}
if (!module_3672) {
  const obj2 = { default: module_3672 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3672;
}
if (!module_3673) {
  const obj3 = { default: module_3673 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3673;
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
