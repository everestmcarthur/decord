// Module ID: 3897
// Function ID: 3898
// Name: differenceInWeeks
// Dependencies: [3884, 3694, 3887]
// Exports: default

// Module 3897 (differenceInWeeks)
import _mod3887 from "module_3887" /* 3887 */;
import compareLocalAsc_mod from "compareLocalAsc" /* 3884 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let compareLocalAsc = compareLocalAsc_mod;
if (!compareLocalAsc) {
  const obj = { default: compareLocalAsc };
  let tmp3 = obj;
} else {
  tmp3 = compareLocalAsc;
}
compareLocalAsc = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInWeeks(arg0, arg1, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = compareLocalAsc.default(arg0, arg1) / 7;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return _mod3887.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
