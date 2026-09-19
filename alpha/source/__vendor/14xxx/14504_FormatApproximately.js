// Module ID: 14504
// Function ID: 14505
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 14504 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
};
