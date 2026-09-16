// Module ID: 14349
// Function ID: 14350
// Name: FormatNumericRange
// Dependencies: [14350]
// Exports: FormatNumericRange

// Module 14349 (FormatNumericRange)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 14350 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};
