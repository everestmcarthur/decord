// Module ID: 14375
// Function ID: 14376
// Dependencies: []
// Exports: shouldPolyfill

// Module 14375

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
