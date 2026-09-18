// Module ID: 3708
// Function ID: 3709
// Dependencies: [3709, 3710, 3711, 3712, 3713]

// Module 3708
import module_3709 from "module_3709" /* 3709 */;
import module_3710 from "module_3710" /* 3710 */;
import module_3711 from "module_3711" /* 3711 */;
import date_mod from "module_3712" /* 3712 */;
import date_mod from "module_3713" /* 3713 */;

if (!module_3709) {
  const obj = { default: module_3709 };
  let tmp3 = obj;
} else {
  tmp3 = module_3709;
}
if (!module_3710) {
  const obj2 = { default: module_3710 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3710;
}
if (!module_3711) {
  const obj3 = { default: module_3711 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3711;
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

export default { code: "hu", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;
