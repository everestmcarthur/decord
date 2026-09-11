// Module ID: 14285
// Function ID: 14286
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 14285 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
};
