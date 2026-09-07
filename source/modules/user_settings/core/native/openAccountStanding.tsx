// Module ID: 11914
// Function ID: 11915
// Name: openAccountStanding
// Dependencies: [1074, 7382, 2]
// Exports: openAccountStanding

// Module 11914 (openAccountStanding)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import openUserSettings from "openUserSettings" /* 7382 */;

const UserSettingsSections = ME.UserSettingsSections;
const result = set.fileFinishedImporting("modules/user_settings/core/native/openAccountStanding.tsx");

export const openAccountStanding = function openAccountStanding() {
  let obj = openUserSettings;
  obj = { screen: UserSettingsSections.ACCOUNT_STANDING };
  obj.openUserSettings(obj);
};
