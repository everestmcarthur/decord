// Module ID: 14278
// Function ID: 14279
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14278

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
