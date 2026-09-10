// Module ID: 14307
// Function ID: 14308
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 14307 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
};
