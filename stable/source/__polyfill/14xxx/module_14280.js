// Module ID: 14280
// Function ID: 14281
// Dependencies: []
// Exports: shouldPolyfill

// Module 14280

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
