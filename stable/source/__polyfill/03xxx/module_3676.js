// Module ID: 3676
// Function ID: 3677
// Dependencies: [3677, 3678, 3679, 3680, 3681]

// Module 3676
import module_3677 from "module_3677" /* 3677 */;
import module_3678 from "module_3678" /* 3678 */;
import module_3679 from "module_3679" /* 3679 */;
import date_mod from "module_3680" /* 3680 */;
import date_mod from "module_3681" /* 3681 */;

if (!module_3677) {
  const obj = { default: module_3677 };
  let tmp3 = obj;
} else {
  tmp3 = module_3677;
}
if (!module_3678) {
  const obj2 = { default: module_3678 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3678;
}
if (!module_3679) {
  const obj3 = { default: module_3679 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3679;
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

export default { code: "el", formatDistance: tmp3.default, formatLong: tmp5.default, formatRelative: tmp7.default, localize: tmp9.default, match: tmp11.default, options: { weekStartsOn: 1, firstWeekContainsDate: 4 } };
export default exports.default;
