// Module ID: 14374
// Function ID: 14375
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14374

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
