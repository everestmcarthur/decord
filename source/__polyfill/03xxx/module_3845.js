// Module ID: 3845
// Function ID: 3846
// Dependencies: [3846, 3695, 3699, 3696, 3847, 3848]
// Exports: default

// Module 3845
import module_3846_mod from "module_3846" /* 3846 */;
import _typeof_mod from "module_3695" /* 3695 */;
import module_3699_mod from "module_3699" /* 3699 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;
import module_3847_mod from "module_3847" /* 3847 */;
import module_3848_mod from "module_3848" /* 3848 */;

let module_3846 = module_3846_mod;
if (!module_3846) {
  const obj = { default: module_3846 };
  let tmp3 = obj;
} else {
  tmp3 = module_3846;
}
module_3846 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  let obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_3699 = module_3699_mod;
if (!module_3699) {
  let obj3 = { default: module_3699 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3699;
}
module_3699 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
let module_3847 = module_3847_mod;
if (!module_3847) {
  const obj5 = { default: module_3847 };
  let tmp11 = obj5;
} else {
  tmp11 = module_3847;
}
module_3847 = tmp11;
let module_3848 = module_3848_mod;
if (!module_3848) {
  const obj6 = { default: module_3848 };
  let tmp13 = obj6;
} else {
  tmp13 = module_3848;
}
module_3848 = tmp13;

export default function addBusinessDays(arg0, arg1) {
  let diff;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  let obj2 = module_3846;
  let defaultResult2 = module_3846.default(defaultResult1);
  const defaultResult3 = module_3699.default(arg1);
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
        let tmp9 = module_3846;
        diff = absolute;
        if (!module_3846.default(defaultResult1)) {
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
      if (module_3848.default(defaultResult1)) {
        let num6 = -1;
        if (num3 < 0) {
          num6 = 2;
        }
        defaultResult1.setDate(defaultResult1.getDate() + num6);
        const date1 = defaultResult1.getDate();
      }
      if (module_3847.default(defaultResult1)) {
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
  obj3 = module_3699;
};
export default exports.default;
