// Module ID: 3843
// Function ID: 3844
// Name: differenceInBusinessDays
// Dependencies: [3811, 3825, 3844, 3845, 3814, 3663, 3664, 3667]
// Exports: default

// Module 3843 (differenceInBusinessDays)
import module_3811_mod from "module_3811" /* 3811 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 3825 */;
import module_3844_mod from "module_3844" /* 3844 */;
import module_3845_mod from "module_3845" /* 3845 */;
import module_3814_mod from "module_3814" /* 3814 */;
import _typeof_mod from "module_3663" /* 3663 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;
import module_3667_mod from "module_3667" /* 3667 */;

let module_3811 = module_3811_mod;
if (!module_3811) {
  const obj = { default: module_3811 };
  let tmp3 = obj;
} else {
  tmp3 = module_3811;
}
module_3811 = tmp3;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  const obj2 = { default: differenceInCalendarDays };
  let tmp5 = obj2;
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
let module_3844 = module_3844_mod;
if (!module_3844) {
  const obj3 = { default: module_3844 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3844;
}
module_3844 = tmp7;
let module_3845 = module_3845_mod;
if (!module_3845) {
  const obj4 = { default: module_3845 };
  let tmp9 = obj4;
} else {
  tmp9 = module_3845;
}
module_3845 = tmp9;
let module_3814 = module_3814_mod;
if (!module_3814) {
  const obj5 = { default: module_3814 };
  let tmp11 = obj5;
} else {
  tmp11 = module_3814;
}
module_3814 = tmp11;
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
let module_3667 = module_3667_mod;
if (!module_3667) {
  const obj8 = { default: module_3667 };
  let tmp17 = obj8;
} else {
  tmp17 = module_3667;
}
module_3667 = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  if (module_3845.default(defaultResult1)) {
    if (module_3845.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = module_3667.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = module_3811.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      let tmp13 = result;
      if (!module_3844.default(defaultResult1, defaultResult5)) {
        do {
          let num5 = 0;
          if (!module_3814.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          defaultResult6 = module_3811.default(defaultResult5, num2);
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!module_3844.default(defaultResult1, defaultResult6));
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
