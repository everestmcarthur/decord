// Module ID: 14305
// Function ID: 14306
// Dependencies: []
// Exports: shouldPolyfill

// Module 14305

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
