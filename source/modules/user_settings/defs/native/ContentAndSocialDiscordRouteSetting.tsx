// Module ID: 15974
// Function ID: 15975
// Name: ContentAndSocialDiscordRouteSetting
// Dependencies: [8079, 1074, 11601, 1114, 4336, 15958, 2]

// Module 15974 (ContentAndSocialDiscordRouteSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import FriendsIcon from "FriendsIcon" /* 4336 */;
import SettingsConstants from "SettingsConstants" /* 8079 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 15958 */;
import SettingBuilders from "SettingBuilders" /* 11601 */;
import size from "module_2" /* 2 */;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["/7xJCF"]);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL,
  IconComponent: FriendsIcon.FriendsIcon,
  screen: {
    route: Constants.UserSettingsSections.CONTENT_AND_SOCIAL,
    getComponent() {
      return ContentAndSocialScreen.DiscordPermissionsPage;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ContentAndSocialDiscordRouteSetting.tsx");

export default route;
