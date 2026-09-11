// Module ID: 3735
// Function ID: 3736
// Dependencies: [3736, 3737, 3738, 3739, 3740]

// Module 3735
import futureSeconds from "futureSeconds" /* 3736 */;
import module_3737 from "module_3737" /* 3737 */;
import module_3738 from "module_3738" /* 3738 */;
import date_mod from "module_3739" /* 3739 */;
import date_mod from "module_3740" /* 3740 */;

if (!futureSeconds) {
  const obj = { default: futureSeconds };
  let tmp3 = obj;
} else {
  tmp3 = futureSeconds;
}
if (!module_3737) {
  const obj2 = { default: module_3737 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3737;
}
if (!module_3738) {
  const obj3 = { default: module_3738 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3738;
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

export default { code: "fi", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;
