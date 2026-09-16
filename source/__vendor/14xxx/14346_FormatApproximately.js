// Module ID: 14346
// Function ID: 14347
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 14346 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
};
