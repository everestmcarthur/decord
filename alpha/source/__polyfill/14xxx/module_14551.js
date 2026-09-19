// Module ID: 14551
// Function ID: 14552
// Dependencies: []
// Exports: shouldPolyfill

// Module 14551

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
