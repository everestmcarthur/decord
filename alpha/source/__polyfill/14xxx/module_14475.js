// Module ID: 14475
// Function ID: 14476
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14475

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
