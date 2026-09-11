// Module ID: 12005
// Function ID: 12006
// Name: openAccountStanding
// Dependencies: [1074, 7456, 2]
// Exports: openAccountStanding

// Module 12005 (openAccountStanding)
import Constants from "Constants" /* 1074 */;
import openUserSettings from "openUserSettings" /* 7456 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/core/native/openAccountStanding.tsx");

export const openAccountStanding = function openAccountStanding() {
  openUserSettings.openUserSettings({ screen: UserSettingsSections.ACCOUNT_STANDING });
};
