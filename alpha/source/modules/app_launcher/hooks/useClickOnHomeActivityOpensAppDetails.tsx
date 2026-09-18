// Module ID: 12331
// Function ID: 12332
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: [1936, 2]
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 12331 (useClickOnHomeActivityOpensAppDetails)
import UserSettings from "UserSettings" /* 1936 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = UserSettings.DeveloperMode;
  return DeveloperMode.useSetting();
};
