// Module ID: 14354
// Function ID: 14355
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 14354 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
};
