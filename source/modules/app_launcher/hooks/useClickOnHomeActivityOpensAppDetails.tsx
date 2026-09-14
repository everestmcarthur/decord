// Module ID: 12219
// Function ID: 12220
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [1935, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 12219 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 1935 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
};
