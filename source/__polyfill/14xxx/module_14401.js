// Module ID: 14401
// Function ID: 14402
// Dependencies: []
// Exports: shouldPolyfill

// Module 14401

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
