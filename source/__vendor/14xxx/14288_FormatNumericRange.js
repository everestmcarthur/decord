// Module ID: 14288
// Function ID: 14289
// Name: FormatNumericRange
// Dependencies: [14289]
// Exports: FormatNumericRange

// Module 14288 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 14289 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};
