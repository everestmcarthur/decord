// Module ID: 3830
// Function ID: 3831
// Name: differenceInBusinessDays
// Dependencies: [3798, 3812, 3831, 3832, 3801, 3650, 3651, 3654]
// Exports: default

// Module 3830 (differenceInBusinessDays)
import module_3798_mod from "module_3798" /* 3798 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 3812 */;
import module_3831_mod from "module_3831" /* 3831 */;
import module_3832_mod from "module_3832" /* 3832 */;
import module_3801_mod from "module_3801" /* 3801 */;
import _typeof_mod from "module_3650" /* 3650 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;
import module_3654_mod from "module_3654" /* 3654 */;

let module_3798 = module_3798_mod;
if (!module_3798) {
  const obj = { default: module_3798 };
  let tmp3 = obj;
} else {
  tmp3 = module_3798;
}
module_3798 = tmp3;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj2 = { default: differenceInCalendarDays };
  let tmp5 = obj2;
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
let module_3831 = module_3831_mod;
if (!module_3831) {
  const obj3 = { default: module_3831 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3831;
}
module_3831 = tmp7;
let module_3832 = module_3832_mod;
if (!module_3832) {
  const obj4 = { default: module_3832 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3832;
}
module_3832 = tmp9;
let module_3801 = module_3801_mod;
if (!module_3801) {
  const obj5 = { default: module_3801 };
  let tmp11 = obj5;
} else {
  tmp11 = module_3801;
}
module_3801 = tmp11;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj6 = { default: _typeof };
  let tmp13 = obj6;
} else {
  tmp13 = _typeof;
}
_typeof = tmp13;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj7 = { default: requiredArgs };
  let tmp15 = obj7;
} else {
  tmp15 = requiredArgs;
}
requiredArgs = tmp15;
let module_3654 = module_3654_mod;
if (!module_3654) {
  const obj8 = { default: module_3654 };
  let tmp17 = obj8;
} else {
  tmp17 = module_3654;
}
module_3654 = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  if (module_3832.default(defaultResult1)) {
    if (module_3832.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = module_3654.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = module_3798.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      let tmp13 = result;
      if (!module_3831.default(defaultResult1, defaultResult5)) {
        do {
          let num5 = 0;
          if (!module_3801.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          defaultResult6 = module_3798.default(defaultResult5, num2);
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!module_3831.default(defaultResult1, defaultResult6));
      }
      let num6 = 0;
      if (0 !== tmp13) {
        num6 = tmp13;
      }
      return num6;
    }
  }
  return NaN;
};
export default exports.default;
