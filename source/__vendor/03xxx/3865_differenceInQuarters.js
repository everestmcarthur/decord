// Module ID: 3865
// Function ID: 3866
// Name: differenceInQuarters
// Dependencies: [3861, 3664, 3857]
// Exports: default

// Module 3865 (differenceInQuarters)
import _mod3857 from "module_3857" /* 3857 */;
import differenceInMonths_mod from "differenceInMonths" /* 3861 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

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
  return _mod3857.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
