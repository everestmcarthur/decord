// Module ID: 12529
// Function ID: 12530
// Name: entitlementExpirationDateToString
// Dependencies: [2025, 2]
// Exports: default

// Module 12529 (entitlementExpirationDateToString)
import closure_0 from "_getSystemLocale" /* 2025 */;

const result = require("set").fileFinishedImporting("modules/premium/powerups/utils/entitlementExpirationDateToString.tsx");

export default function entitlementExpirationDateToString(arg0) {
  return new Date(arg0).toLocaleDateString(locale.locale, { month: "2-digit", day: "2-digit" });
};
