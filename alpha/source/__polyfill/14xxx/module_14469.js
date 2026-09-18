// Module ID: 14469
// Function ID: 14470
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14469

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
