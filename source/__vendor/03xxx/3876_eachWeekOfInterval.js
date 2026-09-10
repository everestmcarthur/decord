// Module ID: 3876
// Function ID: 3877
// Name: eachWeekOfInterval
// Dependencies: [3831, 3822, 3663, 3664]
// Exports: default

// Module 3876 (eachWeekOfInterval)
import module_3831_mod from "module_3831" /* 3831 */;
import startOfWeek_mod from "startOfWeek" /* 3822 */;
import _typeof_mod from "module_3663" /* 3663 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let module_3831 = module_3831_mod;
if (!module_3831) {
  let obj = { default: module_3831 };
  let tmp3 = obj;
} else {
  tmp3 = module_3831;
}
module_3831 = tmp3;
let startOfWeek = startOfWeek_mod;
if (!startOfWeek) {
  const obj2 = { default: startOfWeek };
  let tmp5 = obj2;
} else {
  tmp5 = startOfWeek;
}
startOfWeek = tmp5;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj3 = { default: _typeof };
  let tmp7 = obj3;
} else {
  tmp7 = _typeof;
}
_typeof = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function eachWeekOfInterval(arg0, arg1) {
  let time2;
  let obj = arg0;
  requiredArgs.default(1, arguments);
  if (!arg0) {
    obj = {};
  }
  const defaultResult1 = _typeof.default(obj.start);
  const defaultResult2 = _typeof.default(obj.end);
  const time = defaultResult2.getTime();
  if (defaultResult1.getTime() <= time) {
    let defaultResult3 = startOfWeek.default(defaultResult1, arg1);
    const defaultResult4 = startOfWeek.default(defaultResult2, arg1);
    defaultResult3.setHours(15);
    defaultResult4.setHours(15);
    const time1 = defaultResult4.getTime();
    const items = [];
    if (defaultResult3.getTime() <= time1) {
      do {
        let setHoursResult2 = defaultResult3.setHours(0);
        let arr = items.push(_typeof.default(defaultResult3));
        let defaultResult5 = module_3831.default(defaultResult3, 1);
        let setHoursResult3 = defaultResult5.setHours(15);
        defaultResult3 = defaultResult5;
        time2 = defaultResult5.getTime();
      } while (time2 <= time1);
    }
    return items;
  } else {
    const _RangeError = RangeError;
    const rangeError = new RangeError("Invalid interval");
    throw rangeError;
  }
};
export default exports.default;
