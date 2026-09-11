// Module ID: 14303
// Function ID: 14304
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14303

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
