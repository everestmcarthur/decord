// Module ID: 14329
// Function ID: 14330
// Name: FormatNumeric
// Dependencies: [14330]
// Exports: FormatNumeric

// Module 14329 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 14330 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};
