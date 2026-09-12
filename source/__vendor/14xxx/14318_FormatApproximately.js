// Module ID: 14318
// Function ID: 14319
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 14318 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
};
