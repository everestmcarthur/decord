// Module ID: 14236
// Function ID: 14237
// Name: FormatNumericRange
// Dependencies: [14237]
// Exports: FormatNumericRange

// Module 14236 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 14237 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};
