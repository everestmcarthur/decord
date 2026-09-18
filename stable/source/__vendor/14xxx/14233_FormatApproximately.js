// Module ID: 14233
// Function ID: 14234
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 14233 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
};
