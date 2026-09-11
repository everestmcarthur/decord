// Module ID: 4159
// Function ID: 4160
// Dependencies: [4160, 4162, 4163, 4161, 4164]

// Module 4159
import localeToNumber_mod from "localeToNumber" /* 4160 */;
import module_4162 from "module_4162" /* 4162 */;
import module_4163 from "module_4163" /* 4163 */;
import localeToNumber_mod from "module_4161" /* 4161 */;
import date from "module_4164" /* 4164 */;

let localeToNumber = localeToNumber_mod;
if (!localeToNumber) {
  const obj = { default: localeToNumber };
  let tmp3 = obj;
} else {
  tmp3 = localeToNumber;
}
if (!module_4162) {
  const obj2 = { default: module_4162 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4162;
}
if (!module_4163) {
  const obj3 = { default: module_4163 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4163;
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
