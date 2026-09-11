// Module ID: 3875
// Function ID: 3876
// Name: differenceInBusinessDays
// Dependencies: [3843, 3857, 3876, 3877, 3846, 3695, 3696, 3699]
// Exports: default

// Module 3875 (differenceInBusinessDays)
import module_3843_mod from "module_3843" /* 3843 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 3857 */;
import module_3876_mod from "module_3876" /* 3876 */;
import module_3877_mod from "module_3877" /* 3877 */;
import module_3846_mod from "module_3846" /* 3846 */;
import _typeof_mod from "module_3695" /* 3695 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;
import module_3699_mod from "module_3699" /* 3699 */;

let module_3843 = module_3843_mod;
if (!module_3843) {
  const obj = { default: module_3843 };
  let tmp3 = obj;
} else {
  tmp3 = module_3843;
}
module_3843 = tmp3;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj2 = { default: differenceInCalendarDays };
  let tmp5 = obj2;
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
let module_3876 = module_3876_mod;
if (!module_3876) {
  const obj3 = { default: module_3876 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3876;
}
module_3876 = tmp7;
let module_3877 = module_3877_mod;
if (!module_3877) {
  const obj4 = { default: module_3877 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3877;
}
module_3877 = tmp9;
let module_3846 = module_3846_mod;
if (!module_3846) {
  const obj5 = { default: module_3846 };
  let tmp11 = obj5;
} else {
  tmp11 = module_3846;
}
module_3846 = tmp11;
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
let module_3699 = module_3699_mod;
if (!module_3699) {
  const obj8 = { default: module_3699 };
  let tmp17 = obj8;
} else {
  tmp17 = module_3699;
}
module_3699 = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  if (module_3877.default(defaultResult1)) {
    if (module_3877.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = module_3699.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = module_3843.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      let tmp13 = result;
      if (!module_3876.default(defaultResult1, defaultResult5)) {
        do {
          let num5 = 0;
          if (!module_3846.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          defaultResult6 = module_3843.default(defaultResult5, num2);
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!module_3876.default(defaultResult1, defaultResult6));
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
