// Module ID: 14524
// Function ID: 14525
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14524

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
