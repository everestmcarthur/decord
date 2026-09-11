// Module ID: 3898
// Function ID: 3899
// Name: differenceInSeconds
// Dependencies: [3888, 3696, 3889]
// Exports: default

// Module 3898 (differenceInSeconds)
import _mod3889 from "module_3889" /* 3889 */;
import differenceInMilliseconds_mod from "differenceInMilliseconds" /* 3888 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

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

export default function differenceInSeconds(arg0, arg1, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = differenceInMilliseconds.default(arg0, arg1) / 1000;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return _mod3889.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
