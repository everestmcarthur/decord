// Module ID: 14355
// Function ID: 14356
// Name: FormatNumeric
// Dependencies: [14356]
// Exports: FormatNumeric

// Module 14355 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 14356 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};
