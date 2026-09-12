// Module ID: 14338
// Function ID: 14339
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14338

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
