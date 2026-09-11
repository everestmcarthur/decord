// Module ID: 14332
// Function ID: 14333
// Dependencies: []
// Exports: shouldPolyfill

// Module 14332

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
