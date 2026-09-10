// Module ID: 14354
// Function ID: 14355
// Dependencies: []
// Exports: shouldPolyfill

// Module 14354

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
