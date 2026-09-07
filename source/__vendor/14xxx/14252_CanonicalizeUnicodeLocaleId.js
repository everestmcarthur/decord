// Module ID: 14252
// Function ID: 14253
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 14252 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
