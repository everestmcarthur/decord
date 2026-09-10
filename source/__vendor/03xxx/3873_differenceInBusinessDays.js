// Module ID: 3873
// Function ID: 3874
// Name: differenceInBusinessDays
// Dependencies: [3841, 3855, 3874, 3875, 3844, 3693, 3694, 3697]
// Exports: default

// Module 3873 (differenceInBusinessDays)
import module_3841_mod from "module_3841" /* 3841 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 3855 */;
import module_3874_mod from "module_3874" /* 3874 */;
import module_3875_mod from "module_3875" /* 3875 */;
import module_3844_mod from "module_3844" /* 3844 */;
import _typeof_mod from "module_3693" /* 3693 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;
import module_3697_mod from "module_3697" /* 3697 */;

let module_3841 = module_3841_mod;
if (!module_3841) {
  const obj = { default: module_3841 };
  let tmp3 = obj;
} else {
  tmp3 = module_3841;
}
module_3841 = tmp3;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj2 = { default: differenceInCalendarDays };
  let tmp5 = obj2;
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
let module_3874 = module_3874_mod;
if (!module_3874) {
  const obj3 = { default: module_3874 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3874;
}
module_3874 = tmp7;
let module_3875 = module_3875_mod;
if (!module_3875) {
  const obj4 = { default: module_3875 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3875;
}
module_3875 = tmp9;
let module_3844 = module_3844_mod;
if (!module_3844) {
  const obj5 = { default: module_3844 };
  let tmp11 = obj5;
} else {
  tmp11 = module_3844;
}
module_3844 = tmp11;
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
let module_3697 = module_3697_mod;
if (!module_3697) {
  const obj8 = { default: module_3697 };
  let tmp17 = obj8;
} else {
  tmp17 = module_3697;
}
module_3697 = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  if (module_3875.default(defaultResult1)) {
    if (module_3875.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = module_3697.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = module_3841.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      let tmp13 = result;
      if (!module_3874.default(defaultResult1, defaultResult5)) {
        do {
          let num5 = 0;
          if (!module_3844.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          defaultResult6 = module_3841.default(defaultResult5, num2);
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!module_3874.default(defaultResult1, defaultResult6));
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
