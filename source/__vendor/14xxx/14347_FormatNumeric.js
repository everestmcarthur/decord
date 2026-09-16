// Module ID: 14347
// Function ID: 14348
// Name: FormatNumeric
// Dependencies: [14348]
// Exports: FormatNumeric

// Module 14347 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 14348 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};
