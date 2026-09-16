// Module ID: 14366
// Function ID: 14367
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14366

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
