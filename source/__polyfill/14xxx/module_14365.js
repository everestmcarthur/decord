// Module ID: 14365
// Function ID: 14366
// Dependencies: []
// Exports: shouldPolyfill

// Module 14365

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
