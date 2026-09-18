// Module ID: 14420
// Function ID: 14421
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14420

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
