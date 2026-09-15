// Module ID: 14348
// Function ID: 14349
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14348

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
