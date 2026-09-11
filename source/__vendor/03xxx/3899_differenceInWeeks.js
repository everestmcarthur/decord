// Module ID: 3899
// Function ID: 3900
// Name: differenceInWeeks
// Dependencies: [3886, 3696, 3889]
// Exports: default

// Module 3899 (differenceInWeeks)
import _mod3889 from "module_3889" /* 3889 */;
import compareLocalAsc_mod from "compareLocalAsc" /* 3886 */;
import requiredArgs_mod from "requiredArgs" /* 3696 */;

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
  return _mod3889.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
