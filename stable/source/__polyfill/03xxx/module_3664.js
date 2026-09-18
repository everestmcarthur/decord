// Module ID: 3664
// Function ID: 3665
// Dependencies: [3665, 3666, 3667, 3668, 3669]

// Module 3664
import module_3665 from "module_3665" /* 3665 */;
import module_3666 from "module_3666" /* 3666 */;
import module_3667 from "module_3667" /* 3667 */;
import date_mod from "module_3668" /* 3668 */;
import date_mod from "module_3669" /* 3669 */;

if (!module_3665) {
  const obj = { default: module_3665 };
  let tmp3 = obj;
} else {
  tmp3 = module_3665;
}
if (!module_3666) {
  const obj2 = { default: module_3666 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3666;
}
if (!module_3667) {
  const obj3 = { default: module_3667 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3667;
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

export default { code: "da", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;
