// Module ID: 14496
// Function ID: 14497
// Dependencies: []
// Exports: shouldPolyfill

// Module 14496

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
