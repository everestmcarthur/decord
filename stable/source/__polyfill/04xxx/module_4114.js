// Module ID: 4114
// Function ID: 4115
// Dependencies: [4115, 4117, 4118, 4116, 4119]

// Module 4114
import localeToNumber_mod from "localeToNumber" /* 4115 */;
import module_4117 from "module_4117" /* 4117 */;
import module_4118 from "module_4118" /* 4118 */;
import localeToNumber_mod from "module_4116" /* 4116 */;
import date from "module_4119" /* 4119 */;

let localeToNumber = localeToNumber_mod;
if (!localeToNumber) {
  const obj = { default: localeToNumber };
  let tmp3 = obj;
} else {
  tmp3 = localeToNumber;
}
if (!module_4117) {
  const obj2 = { default: module_4117 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4117;
}
if (!module_4118) {
  const obj3 = { default: module_4118 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4118;
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
