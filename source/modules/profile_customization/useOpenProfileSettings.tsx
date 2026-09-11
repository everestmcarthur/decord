// Module ID: 9299
// Function ID: 9300
// Name: useOpenProfileSettings
// Dependencies: [19, 1371, 9300, 1074, 1084, 8246, 9301, 9302, 7456, 2]
// Exports: default

// Module 9299 (useOpenProfileSettings)
import _mod19 from "module_19" /* 19 */;
import Constants from "Constants" /* 1074 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import openUserSettings from "openUserSettings" /* 7456 */;
import GuildIdentityActionCreators from "GuildIdentityActionCreators" /* 9302 */;
import UserStore from "UserStore" /* 1371 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9300 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8246 */;
import size from "module_2" /* 2 */;

_mod19.useCallback;
const UserSettingsSections = Constants.UserSettingsSections;
let closure_5 = UserSettingsConstants.ProfileCustomizationSubsection;
const result = size.fileFinishedImporting("modules/profile_customization/useOpenProfileSettings.tsx");

export default function useOpenProfileSettings() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const guild = obj.guild;
  const scrollPosition = obj.scrollPosition;
  const items = [guild, scrollPosition, obj.analyticsLocations, guild(scrollPosition[6]).useIsEligibleForUserProfileWYSIWYGEditing("useOpenProfileSettings")];
  return useCallback(() => {
    if (null != guild) {
      const guildIdentitySettings = GuildIdentityActionCreators.initGuildIdentitySettings(tmp.id);
    }
    if (null != guild) {
      let USER_PROFILE = constants.GUILD;
    } else {
      USER_PROFILE = constants.USER_PROFILE;
    }
    ProfileCustomizationNavigationStore.setState({ subsection: USER_PROFILE, scrollPosition });
    openUserSettings.openUserSettings({ screen: UserSettingsSections.PROFILE_CUSTOMIZATION });
  }, items);
};
