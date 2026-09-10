// Module ID: 4157
// Function ID: 4158
// Dependencies: [4158, 4160, 4161, 4159, 4162]

// Module 4157
import localeToNumber_mod from "localeToNumber" /* 4158 */;
import module_4160 from "module_4160" /* 4160 */;
import module_4161 from "module_4161" /* 4161 */;
import localeToNumber_mod from "module_4159" /* 4159 */;
import date from "module_4162" /* 4162 */;

let localeToNumber = localeToNumber_mod;
if (!localeToNumber) {
  const obj = { default: localeToNumber };
  let tmp3 = obj;
} else {
  tmp3 = localeToNumber;
}
if (!module_4160) {
  const obj2 = { default: module_4160 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4160;
}
if (!module_4161) {
  const obj3 = { default: module_4161 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4161;
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
