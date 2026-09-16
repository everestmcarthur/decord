// Module ID: 14393
// Function ID: 14394
// Dependencies: []
// Exports: shouldPolyfill

// Module 14393

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
