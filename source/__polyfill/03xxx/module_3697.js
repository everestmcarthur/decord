// Module ID: 3697
// Function ID: 3698
// Dependencies: [3698, 3699, 3700, 3701, 3702]

// Module 3697
import module_3698 from "module_3698" /* 3698 */;
import module_3699 from "module_3699" /* 3699 */;
import module_3700 from "module_3700" /* 3700 */;
import date_mod from "module_3701" /* 3701 */;
import date_mod from "module_3702" /* 3702 */;

if (!module_3698) {
  const obj = { default: module_3698 };
  let tmp3 = obj;
} else {
  tmp3 = module_3698;
}
if (!module_3699) {
  const obj2 = { default: module_3699 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3699;
}
if (!module_3700) {
  const obj3 = { default: module_3700 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3700;
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

export default { code: "es", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 1 } };
export default exports.default;
