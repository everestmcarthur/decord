// Module ID: 14291
// Function ID: 14292
// Name: FormatNumericToParts
// Dependencies: [14287, 14259]
// Exports: FormatNumericToParts

// Module 14291 (FormatNumericToParts)
import _mod14259 from "module_14259" /* 14259 */;
import PartitionNumberPattern from "PartitionNumberPattern" /* 14287 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumericToParts = function FormatNumericToParts(arg0, isNaN, getInternalSlots) {
  let length;
  const result = PartitionNumberPattern.PartitionNumberPattern(getInternalSlots.getInternalSlots(arg0), isNaN);
  let num = 0;
  const ArrayCreateResult = _mod14259.ArrayCreate(0);
  if (0 < result.length) {
    do {
      let iter = result[num];
      let obj = { type: iter.type, value: iter.value };
      let arr = ArrayCreateResult.push(obj);
      num = num + 1;
      length = result.length;
    } while (num < length);
  }
  return ArrayCreateResult;
};
