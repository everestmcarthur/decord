// Module ID: 3811
// Function ID: 3812
// Dependencies: [3812, 3813, 3814, 3815, 3816]

// Module 3811
import module_3812 from "module_3812" /* 3812 */;
import module_3813 from "module_3813" /* 3813 */;
import module_3814 from "module_3814" /* 3814 */;
import date_mod from "module_3815" /* 3815 */;
import date_mod from "module_3816" /* 3816 */;

if (!module_3812) {
  const obj = { default: module_3812 };
  let tmp3 = obj;
} else {
  tmp3 = module_3812;
}
if (!module_3813) {
  const obj2 = { default: module_3813 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3813;
}
if (!module_3814) {
  const obj3 = { default: module_3814 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3814;
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

export default { code: "ru", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 1 } };
export default exports.default;
