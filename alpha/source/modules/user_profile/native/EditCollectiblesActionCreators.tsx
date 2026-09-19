// Module ID: 8443
// Function ID: 8444
// Name: EditCollectiblesActionCreators
// Dependencies: [1074, 7622, 2]
// Exports: navigateToNitroManagement

// Module 8443 (EditCollectiblesActionCreators)
import Constants from "Constants" /* 1074 */;
import openUserSettings from "openUserSettings" /* 7622 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  openUserSettings.openUserSettings({ screen: UserSettingsSections.PREMIUM });
};
