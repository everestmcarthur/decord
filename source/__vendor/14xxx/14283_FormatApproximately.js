// Module ID: 14283
// Function ID: 14284
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 14283 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
};
