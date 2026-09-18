// Module ID: 14449
// Function ID: 14450
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 14449 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
};
