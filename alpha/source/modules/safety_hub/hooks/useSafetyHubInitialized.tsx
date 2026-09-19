// Module ID: 12163
// Function ID: 12164
// Name: useSafetyHubInitialized
// Dependencies: [8701, 504, 2]
// Exports: useSafetyHubInitialized

// Module 12163 (useSafetyHubInitialized)
import initialize from "initialize" /* 504 */;
import SafetyHubStore from "SafetyHubStore" /* 8701 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubInitialized.tsx");

export const useSafetyHubInitialized = function useSafetyHubInitialized() {
  const items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => initialized.isInitialized());
};
