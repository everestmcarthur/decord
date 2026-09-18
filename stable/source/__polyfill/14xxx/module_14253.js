// Module ID: 14253
// Function ID: 14254
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14253

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
