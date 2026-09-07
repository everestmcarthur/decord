// Module ID: 14236
// Function ID: 14237
// Name: __exportStarResult18
// Dependencies: [14237]

// Module 14236 (__exportStarResult18)
import __exportStarResult25 from "__exportStarResult25" /* 14237 */;

require = arg1;
const dependencyMap = arg6;
arg5.FormatNumericRange = function FormatNumericRange(arg0, isNaN, isNaN2, getInternalSlots) {
  const result = __exportStarResult25.PartitionNumberRangePattern(arg0, isNaN, isNaN2, { getInternalSlots: getInternalSlots.getInternalSlots });
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};
