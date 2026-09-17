// Module ID: 12240
// Function ID: 12241
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [1936, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 12240 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 1936 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
};
