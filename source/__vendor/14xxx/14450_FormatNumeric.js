// Module ID: 14450
// Function ID: 14451
// Name: FormatNumeric
// Dependencies: [14451]
// Exports: FormatNumeric

// Module 14450 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 14451 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};
