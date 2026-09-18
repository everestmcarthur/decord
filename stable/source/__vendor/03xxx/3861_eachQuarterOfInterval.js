// Module ID: 3861
// Function ID: 3862
// Name: eachQuarterOfInterval
// Dependencies: [3816, 3862, 3650, 3651]
// Exports: default

// Module 3861 (eachQuarterOfInterval)
import module_3816_mod from "module_3816" /* 3816 */;
import startOfQuarter_mod from "startOfQuarter" /* 3862 */;
import _typeof_mod from "module_3650" /* 3650 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let module_3816 = module_3816_mod;
if (!module_3816) {
  let obj = { default: module_3816 };
  let tmp3 = obj;
} else {
  tmp3 = module_3816;
}
module_3816 = tmp3;
let startOfQuarter = startOfQuarter_mod;
if (!startOfQuarter) {
  const obj2 = { default: startOfQuarter };
  let tmp5 = obj2;
} else {
  tmp5 = startOfQuarter;
}
startOfQuarter = tmp5;
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

export default function eachQuarterOfInterval(arg0) {
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
    let defaultResult3 = startOfQuarter.default(defaultResult1);
    const time1 = startOfQuarter.default(defaultResult2).getTime();
    const items = [];
    if (defaultResult3.getTime() <= time1) {
      do {
        let arr = items.push(_typeof.default(defaultResult3));
        let defaultResult5 = module_3816.default(defaultResult3, 1);
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
