// Module ID: 14286
// Function ID: 14287
// Name: FormatNumeric
// Dependencies: [14287]
// Exports: FormatNumeric

// Module 14286 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 14287 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};
