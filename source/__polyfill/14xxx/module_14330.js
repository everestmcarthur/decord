// Module ID: 14330
// Function ID: 14331
// Dependencies: []
// Exports: shouldPolyfill

// Module 14330

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
