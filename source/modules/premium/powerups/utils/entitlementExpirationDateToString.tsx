// Module ID: 12768
// Function ID: 12769
// Name: entitlementExpirationDateToString
// Dependencies: [2026, 2]
// Exports: default

// Module 12768 (entitlementExpirationDateToString)
import LocaleStore from "LocaleStore" /* 2026 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  return new Date(arg0).toLocaleDateString(LocaleStore.locale, { month: "2-digit", day: "2-digit" });
};
