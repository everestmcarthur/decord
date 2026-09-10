// Module ID: 3671
// Function ID: 3672
// Dependencies: [3672, 3673, 3674, 3675, 3676]

// Module 3671
import module_3672 from "module_3672" /* 3672 */;
import module_3673 from "module_3673" /* 3673 */;
import module_3674 from "module_3674" /* 3674 */;
import date_mod from "module_3675" /* 3675 */;
import date_mod from "module_3676" /* 3676 */;

if (!module_3672) {
  const obj = { default: module_3672 };
  let tmp3 = obj;
} else {
  tmp3 = module_3672;
}
if (!module_3673) {
  const obj2 = { default: module_3673 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3673;
}
if (!module_3674) {
  const obj3 = { default: module_3674 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3674;
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
