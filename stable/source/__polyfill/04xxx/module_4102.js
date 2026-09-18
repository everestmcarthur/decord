// Module ID: 4102
// Function ID: 4103
// Dependencies: [4103, 4104, 4105, 4106, 4107]

// Module 4102
import module_4103 from "module_4103" /* 4103 */;
import module_4104 from "module_4104" /* 4104 */;
import module_4105 from "module_4105" /* 4105 */;
import date_mod from "module_4106" /* 4106 */;
import date_mod from "module_4107" /* 4107 */;

if (!module_4103) {
  const obj = { default: module_4103 };
  let tmp3 = obj;
} else {
  tmp3 = module_4103;
}
if (!module_4104) {
  const obj2 = { default: module_4104 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4104;
}
if (!module_4105) {
  const obj3 = { default: module_4105 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4105;
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

export default { code: "zh-CN", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;
