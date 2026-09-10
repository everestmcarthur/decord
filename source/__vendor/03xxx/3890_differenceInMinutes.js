// Module ID: 3890
// Function ID: 3891
// Name: differenceInMinutes
// Dependencies: [3886, 3694, 3872, 3887]
// Exports: default

// Module 3890 (differenceInMinutes)
import daysInWeek from "daysInWeek" /* 3872 */;
import _mod3887 from "module_3887" /* 3887 */;
import differenceInMilliseconds_mod from "differenceInMilliseconds" /* 3886 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

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

export default function differenceInMinutes(arg0, arg1, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = differenceInMilliseconds.default(arg0, arg1) / daysInWeek.millisecondsInMinute;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return _mod3887.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
