// Module ID: 14305
// Function ID: 14306
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14305

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
