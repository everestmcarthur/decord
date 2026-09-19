// Module ID: 14505
// Function ID: 14506
// Name: FormatNumeric
// Dependencies: [14506]
// Exports: FormatNumeric

// Module 14505 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 14506 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};
