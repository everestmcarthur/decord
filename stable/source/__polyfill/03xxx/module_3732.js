// Module ID: 3732
// Function ID: 3733
// Dependencies: [3733, 3734, 3735, 3736, 3737]

// Module 3732
import translateSeconds from "translateSeconds" /* 3733 */;
import module_3734 from "module_3734" /* 3734 */;
import module_3735 from "module_3735" /* 3735 */;
import date_mod from "module_3736" /* 3736 */;
import date_mod from "module_3737" /* 3737 */;

if (!translateSeconds) {
  const obj = { default: translateSeconds };
  let tmp3 = obj;
} else {
  tmp3 = translateSeconds;
}
if (!module_3734) {
  const obj2 = { default: module_3734 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3734;
}
if (!module_3735) {
  const obj3 = { default: module_3735 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3735;
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

export default { code: "lt", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;
