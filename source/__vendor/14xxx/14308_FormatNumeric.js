// Module ID: 14308
// Function ID: 14309
// Name: FormatNumeric
// Dependencies: [14309]
// Exports: FormatNumeric

// Module 14308 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 14309 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};
