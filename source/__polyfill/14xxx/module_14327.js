// Module ID: 14327
// Function ID: 14328
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14327

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
