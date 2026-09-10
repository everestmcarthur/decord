// Module ID: 3867
// Function ID: 3868
// Name: differenceInWeeks
// Dependencies: [3854, 3664, 3857]
// Exports: default

// Module 3867 (differenceInWeeks)
import _mod3857 from "module_3857" /* 3857 */;
import compareLocalAsc_mod from "compareLocalAsc" /* 3854 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

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
  return _mod3857.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
