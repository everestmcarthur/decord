// Module ID: 4019
// Function ID: 4020
// Dependencies: [3695, 3696, 3699, 3700]
// Exports: default

// Module 4019
import _mod3700 from "module_3700" /* 3700 */;
import _typeof_mod from "module_3695" /* 3695 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;
import module_3699_mod from "module_3699" /* 3699 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3699 = module_3699_mod;
if (!module_3699) {
  const obj3 = { default: module_3699 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3699;
}
module_3699 = tmp7;

export default function setUTCDay(arg0, arg1, weekStartsOn) {
  requiredArgs.default(2, arguments);
  const defaultOptions = _mod3700.getDefaultOptions();
  weekStartsOn = undefined;
  if (null != weekStartsOn) {
    weekStartsOn = weekStartsOn.weekStartsOn;
  }
  if (null === weekStartsOn) {
    let weekStartsOn1;
    if (null != weekStartsOn) {
      locale = weekStartsOn.locale;
      if (null !== locale) {
        if (undefined !== locale) {
          const options = locale.options;
          if (null !== options) {
            if (undefined !== options) {
              weekStartsOn1 = options.weekStartsOn;
            }
          }
        }
      }
    }
    weekStartsOn = weekStartsOn1;
  }
  if (null === weekStartsOn) {
    weekStartsOn = defaultOptions.weekStartsOn;
  }
  if (null === weekStartsOn) {
    const locale2 = defaultOptions.locale;
    let weekStartsOn2;
    if (null !== locale2) {
      if (undefined !== locale2) {
        const options2 = locale2.options;
        if (null !== options2) {
          if (undefined !== options2) {
            weekStartsOn2 = options2.weekStartsOn;
          }
        }
      }
    }
    weekStartsOn = weekStartsOn2;
  }
  let num = 0;
  if (null !== weekStartsOn) {
    num = 0;
    if (undefined !== weekStartsOn) {
      num = weekStartsOn;
    }
  }
  const defaultResult1 = module_3699.default(num);
  if (defaultResult1 >= 0) {
    if (defaultResult1 <= 6) {
      const defaultResult2 = _typeof.default(arg0);
      const defaultResult3 = module_3699.default(arg1);
      let num4 = 0;
      const uTCDay = defaultResult2.getUTCDay();
      if ((defaultResult3 % 7 + 7) % 7 < defaultResult1) {
        num4 = 7;
      }
      const diff = num4 + defaultResult3 - uTCDay;
      defaultResult2.setUTCDate(defaultResult2.getUTCDate() + diff);
      return defaultResult2;
    }
  }
  const rangeError = new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  throw rangeError;
};
export default exports.default;
