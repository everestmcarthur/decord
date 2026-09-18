// Module ID: 3842
// Function ID: 3843
// Name: differenceInHours
// Dependencies: [3843, 3651, 3829, 3844]
// Exports: default

// Module 3842 (differenceInHours)
import daysInWeek from "daysInWeek" /* 3829 */;
import _mod3844 from "module_3844" /* 3844 */;
import differenceInMilliseconds_mod from "differenceInMilliseconds" /* 3843 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let differenceInMilliseconds = differenceInMilliseconds_mod;
if (!differenceInMilliseconds) {
  const obj = { default: differenceInMilliseconds };
  let tmp3 = obj;
} else {
  tmp3 = differenceInMilliseconds;
}
differenceInMilliseconds = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInHours(arg0, arg1, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = differenceInMilliseconds.default(arg0, arg1) / daysInWeek.millisecondsInHour;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return _mod3844.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
