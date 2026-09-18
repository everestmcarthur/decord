// Module ID: 3800
// Function ID: 3801
// Dependencies: [3801, 3650, 3654, 3651, 3802, 3803]
// Exports: default

// Module 3800
import module_3801_mod from "module_3801" /* 3801 */;
import _typeof_mod from "module_3650" /* 3650 */;
import module_3654_mod from "module_3654" /* 3654 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;
import module_3802_mod from "module_3802" /* 3802 */;
import module_3803_mod from "module_3803" /* 3803 */;

let module_3801 = module_3801_mod;
if (!module_3801) {
  const obj = { default: module_3801 };
  let tmp3 = obj;
} else {
  tmp3 = module_3801;
}
module_3801 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  let obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_3654 = module_3654_mod;
if (!module_3654) {
  let obj3 = { default: module_3654 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3654;
}
module_3654 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
let module_3802 = module_3802_mod;
if (!module_3802) {
  const obj5 = { default: module_3802 };
  let tmp11 = obj5;
} else {
  tmp11 = module_3802;
}
module_3802 = tmp11;
let module_3803 = module_3803_mod;
if (!module_3803) {
  const obj6 = { default: module_3803 };
  let tmp13 = obj6;
} else {
  tmp13 = module_3803;
}
module_3803 = tmp13;

export default function addBusinessDays(arg0, arg1) {
  let diff;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  let obj2 = module_3801;
  let defaultResult2 = module_3801.default(defaultResult1);
  const defaultResult3 = module_3654.default(arg1);
  if (isNaN(defaultResult3)) {
    const _Date = Date;
    const date = new Date(NaN);
    return date;
  } else {
    let num3 = 1;
    const hours = defaultResult1.getHours();
    if (defaultResult3 < 0) {
      num3 = -1;
    }
    defaultResult1.setDate(defaultResult1.getDate() + 7 * obj3.default(defaultResult3 / 5));
    const _Math = Math;
    let absolute = Math.abs(defaultResult3 % 5);
    if (absolute > 0) {
      do {
        let setDateResult1 = defaultResult1.setDate(defaultResult1.getDate() + num3);
        let tmp9 = module_3801;
        diff = absolute;
        if (!module_3801.default(defaultResult1)) {
          diff = absolute - 1;
        }
        absolute = diff;
        obj2 = tmp9;
      } while (diff > 0);
    }
    if (defaultResult2) {
      defaultResult2 = obj2.default(defaultResult1);
    }
    if (defaultResult2) {
      defaultResult2 = 0 !== defaultResult3;
    }
    if (defaultResult2) {
      if (module_3803.default(defaultResult1)) {
        let num6 = -1;
        if (num3 < 0) {
          num6 = 2;
        }
        defaultResult1.setDate(defaultResult1.getDate() + num6);
        const date1 = defaultResult1.getDate();
      }
      if (module_3802.default(defaultResult1)) {
        let num7 = -2;
        if (num3 < 0) {
          num7 = 1;
        }
        defaultResult1.setDate(defaultResult1.getDate() + num7);
        const date2 = defaultResult1.getDate();
      }
    }
    defaultResult1.setHours(hours);
    return defaultResult1;
  }
  obj3 = module_3654;
};
export default exports.default;
