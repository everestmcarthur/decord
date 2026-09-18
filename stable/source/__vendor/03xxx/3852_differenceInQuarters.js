// Module ID: 3852
// Function ID: 3853
// Name: differenceInQuarters
// Dependencies: [3848, 3651, 3844]
// Exports: default

// Module 3852 (differenceInQuarters)
import _mod3844 from "module_3844" /* 3844 */;
import differenceInMonths_mod from "differenceInMonths" /* 3848 */;
import requiredArgs_mod from "requiredArgs" /* 3651 */;

let differenceInMonths = differenceInMonths_mod;
if (!differenceInMonths) {
  const obj = { default: differenceInMonths };
  let tmp3 = obj;
} else {
  tmp3 = differenceInMonths;
}
differenceInMonths = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInQuarters(arg0, arg1, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = differenceInMonths.default(arg0, arg1) / 3;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return _mod3844.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
