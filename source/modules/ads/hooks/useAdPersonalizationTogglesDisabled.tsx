// Module ID: 15859
// Function ID: 15860
// Name: useAdPersonalizationTogglesDisabled
// Dependencies: [13688, 504, 2]
// Exports: useAdPersonalizationTogglesDisabled

// Module 15859 (useAdPersonalizationTogglesDisabled)
import initialize from "initialize" /* 504 */;
import closure_2 from "reset" /* 13688 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/ads/hooks/useAdPersonalizationTogglesDisabled.tsx");

export const useAdPersonalizationTogglesDisabled = function useAdPersonalizationTogglesDisabled() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => togglesDisabled.isTogglesDisabled());
};
