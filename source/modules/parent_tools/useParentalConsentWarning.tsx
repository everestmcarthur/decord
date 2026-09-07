// Module ID: 14869
// Function ID: 14870
// Name: useParentalConsentWarning
// Dependencies: [14870, 504, 2]
// Exports: useParentalConsentWarning

// Module 14869 (useParentalConsentWarning)
import initialize from "initialize" /* 504 */;
import closure_2 from "initialize" /* 14870 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/useParentalConsentWarning.tsx");

export const useParentalConsentWarning = function useParentalConsentWarning() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => warning.getWarning());
};
