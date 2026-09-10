// Module ID: 3709
// Function ID: 3710
// Dependencies: [3710, 3711, 3712, 3713, 3714]

// Module 3709
import module_3710 from "module_3710" /* 3710 */;
import module_3711 from "module_3711" /* 3711 */;
import module_3712 from "module_3712" /* 3712 */;
import date_mod from "module_3713" /* 3713 */;
import date_mod from "module_3714" /* 3714 */;

if (!module_3710) {
  const obj = { default: module_3710 };
  let tmp3 = obj;
} else {
  tmp3 = module_3710;
}
if (!module_3711) {
  const obj2 = { default: module_3711 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3711;
}
if (!module_3712) {
  const obj3 = { default: module_3712 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3712;
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

export default { code: "fr", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;
