// Module ID: 15138
// Function ID: 15139
// Name: useParentalConsentWarning
// Dependencies: [15139, 504, 2]
// Exports: useParentalConsentWarning

// Module 15138 (useParentalConsentWarning)
import initialize from "initialize" /* 504 */;
import ParentalConsentWarningStore from "ParentalConsentWarningStore" /* 15139 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export const useParentalConsentWarning = function useParentalConsentWarning() {
  const items = [ParentalConsentWarningStore];
  return initialize.useStateFromStores(items, () => warning.getWarning());
};
