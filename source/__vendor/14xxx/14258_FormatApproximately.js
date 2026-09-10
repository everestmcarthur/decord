// Module ID: 14258
// Function ID: 14259
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 14258 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
};
