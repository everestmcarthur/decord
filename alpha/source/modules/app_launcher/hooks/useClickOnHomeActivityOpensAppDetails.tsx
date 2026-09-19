// Module ID: 12340
// Function ID: 12341
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [2019, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 12340 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 2019 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
};
