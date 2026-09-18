// Module ID: 4096
// Function ID: 4097
// Dependencies: [4097, 4098, 4099, 4100, 4101]

// Module 4096
import module_4097 from "module_4097" /* 4097 */;
import module_4098 from "module_4098" /* 4098 */;
import module_4099 from "module_4099" /* 4099 */;
import date_mod from "module_4100" /* 4100 */;
import date_mod from "module_4101" /* 4101 */;

if (!module_4097) {
  const obj = { default: module_4097 };
  let tmp3 = obj;
} else {
  tmp3 = module_4097;
}
if (!module_4098) {
  const obj2 = { default: module_4098 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4098;
}
if (!module_4099) {
  const obj3 = { default: module_4099 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4099;
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

export default { code: "vi", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 1 } };
export default exports.default;
