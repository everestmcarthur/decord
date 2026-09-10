// Module ID: 3907
// Function ID: 3908
// Name: eachWeekendOfInterval
// Dependencies: [3899, 3845, 3844, 3694]
// Exports: default

// Module 3907 (eachWeekendOfInterval)
import eachDayOfInterval_mod from "eachDayOfInterval" /* 3899 */;
import module_3845_mod from "module_3845" /* 3845 */;
import module_3844_mod from "module_3844" /* 3844 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let eachDayOfInterval = eachDayOfInterval_mod;
if (!eachDayOfInterval) {
  const obj = { default: eachDayOfInterval };
  let tmp3 = obj;
} else {
  tmp3 = eachDayOfInterval;
}
eachDayOfInterval = tmp3;
let module_3845 = module_3845_mod;
if (!module_3845) {
  const obj2 = { default: module_3845 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3845;
}
module_3845 = tmp5;
let module_3844 = module_3844_mod;
if (!module_3844) {
  const obj3 = { default: module_3844 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3844;
}
module_3844 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function eachWeekendOfInterval(arg0) {
  let tmp5;
  requiredArgs.default(1, arguments);
  const defaultResult1 = eachDayOfInterval.default(arg0);
  const items = [];
  let num = 0;
  if (0 < defaultResult1.length) {
    do {
      let sum = num + 1;
      let tmp3 = defaultResult1[num];
      tmp5 = sum;
      if (module_3844.default(tmp3)) {
        let arr = items.push(tmp3);
        let sum1 = sum;
        if (module_3845.default(tmp3)) {
          sum1 = sum + 5;
        }
        tmp5 = sum1;
      }
      num = tmp5;
    } while (tmp5 < defaultResult1.length);
  }
  return items;
};
export default exports.default;
