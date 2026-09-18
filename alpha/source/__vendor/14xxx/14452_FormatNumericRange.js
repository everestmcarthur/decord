// Module ID: 14452
// Function ID: 14453
// Name: FormatNumericRange
// Dependencies: [14453]
// Exports: FormatNumericRange

// Module 14452 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 14453 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};
