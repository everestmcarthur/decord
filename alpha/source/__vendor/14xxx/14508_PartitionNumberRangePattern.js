// Module ID: 14508
// Function ID: 14509
// Name: PartitionNumberRangePattern
// Dependencies: [14480, 14506, 14505, 14504, 14493]
// Exports: PartitionNumberRangePattern

// Module 14508 (PartitionNumberRangePattern)
import _mod14480 from "module_14480" /* 14480 */;
import FormatNumeric from "FormatNumeric" /* 14505 */;

require = arg1;
const dependencyMap = arg6;

export const PartitionNumberRangePattern = function PartitionNumberRangePattern(arg0, isNaN, isNaN2, getInternalSlots) {
  getInternalSlots = getInternalSlots.getInternalSlots;
  const isNaNResult = isNaN.isNaN();
  let tmp4 = !isNaNResult;
  if (!isNaNResult) {
    tmp4 = !isNaN2.isNaN();
  }
  _mod14480.invariant(tmp4, "Input must be a number", RangeError);
  const internalSlots = getInternalSlots(arg0);
  const result = tmp(14506).PartitionNumberPattern(internalSlots, isNaN);
  const result1 = tmp(14506).PartitionNumberPattern(internalSlots, isNaN2);
  if (FormatNumericResult === FormatNumeric.FormatNumeric(internalSlots, isNaN2)) {
    const FormatApproximatelyResult = tmp(14504).FormatApproximately(internalSlots, result);
    const item = FormatApproximatelyResult.forEach((item) => {
      item.source = "shared";
    });
    return FormatApproximatelyResult;
  } else {
    const items = [];
    const item1 = result.forEach((item) => {
      item.source = "startRange";
      items.push(item);
    });
    const obj = { type: "literal", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].rangeSign, source: "shared" };
    items.push(obj);
    const item2 = result1.forEach((item) => {
      item.source = "endRange";
      items.push(item);
    });
    const obj2 = { getInternalSlots };
    return tmp(14493).CollapseNumberRange(arg0, items, obj2);
  }
  FormatNumericResult = FormatNumeric.FormatNumeric(internalSlots, isNaN);
};
