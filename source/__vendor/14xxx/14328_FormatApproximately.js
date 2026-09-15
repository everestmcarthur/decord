// Module ID: 14328
// Function ID: 14329
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 14328 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
};
