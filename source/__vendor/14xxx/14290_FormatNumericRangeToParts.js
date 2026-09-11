// Module ID: 14290
// Function ID: 14291
// Name: FormatNumericRangeToParts
// Dependencies: [14289]
// Exports: FormatNumericRangeToParts

// Module 14290 (FormatNumericRangeToParts)
import PartitionNumberRangePattern from "PartitionNumberRangePattern" /* 14289 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumericRangeToParts = function FormatNumericRangeToParts(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = PartitionNumberRangePattern.PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  return result.map((type, index) => ({ type: type.type, value: type.value, source: type.source, result: index.toString() }));
};
