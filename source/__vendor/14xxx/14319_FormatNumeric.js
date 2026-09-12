// Module ID: 14319
// Function ID: 14320
// Name: FormatNumeric
// Dependencies: [14320]
// Exports: FormatNumeric

// Module 14319 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 14320 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};
