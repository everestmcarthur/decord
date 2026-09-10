// Module ID: 4127
// Function ID: 4128
// Dependencies: [4128, 4130, 4131, 4129, 4132]

// Module 4127
import localeToNumber_mod from "localeToNumber" /* 4128 */;
import module_4130 from "module_4130" /* 4130 */;
import module_4131 from "module_4131" /* 4131 */;
import localeToNumber_mod from "module_4129" /* 4129 */;
import date from "module_4132" /* 4132 */;

let localeToNumber = localeToNumber_mod;
if (!localeToNumber) {
  const obj = { default: localeToNumber };
  let tmp3 = obj;
} else {
  tmp3 = localeToNumber;
}
if (!module_4130) {
  const obj2 = { default: module_4130 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4130;
}
if (!module_4131) {
  const obj3 = { default: module_4131 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4131;
}
let localeToNumber = localeToNumber_mod;
if (!localeToNumber) {
  const obj4 = { default: localeToNumber };
  let tmp9 = obj4;
} else {
  tmp9 = localeToNumber;
}
if (!date) {
  const obj5 = { default: date };
  let tmp11 = obj5;
} else {
  tmp11 = date;
}

export default { code: "hi", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 0, firstWeekContainsDate: 4 } };
export default exports.default;
