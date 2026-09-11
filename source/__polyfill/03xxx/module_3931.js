// Module ID: 3931
// Function ID: 3932
// Dependencies: [3695, 3932, 3933, 3696]
// Exports: default

// Module 3931
import _typeof_mod from "module_3695" /* 3695 */;
import startOfUTCISOWeek_mod from "startOfUTCISOWeek" /* 3932 */;
import startOfUTCISOWeekYear_mod from "startOfUTCISOWeekYear" /* 3933 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let startOfUTCISOWeek = startOfUTCISOWeek_mod;
if (!startOfUTCISOWeek) {
  const obj2 = { default: startOfUTCISOWeek };
  let tmp5 = obj2;
} else {
  tmp5 = startOfUTCISOWeek;
}
startOfUTCISOWeek = tmp5;
let startOfUTCISOWeekYear = startOfUTCISOWeekYear_mod;
if (!startOfUTCISOWeekYear) {
  const obj3 = { default: startOfUTCISOWeekYear };
  let tmp7 = obj3;
} else {
  tmp7 = startOfUTCISOWeekYear;
}
startOfUTCISOWeekYear = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
let c4 = 604800000;

export default function getUTCISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const time = startOfUTCISOWeek.default(defaultResult1).getTime();
  const defaultResult2 = startOfUTCISOWeek.default(defaultResult1);
  return Math.round((time - startOfUTCISOWeekYear.default(defaultResult1).getTime()) / c4) + 1;
};
export default exports.default;
