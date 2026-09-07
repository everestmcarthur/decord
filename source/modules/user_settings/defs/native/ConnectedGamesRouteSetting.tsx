// Module ID: 15887
// Function ID: 15888
// Name: route
// Dependencies: [7975, 1074, 11473, 1114, 4260, 15870, 2]

// Module 15887 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import FriendsIcon from "FriendsIcon" /* 4260 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import ContentAndSocialSettings from "ContentAndSocialSettings" /* 15870 */;
import createToggle from "createToggle" /* 11473 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.YpCiMt);
  },
  parent: MobileUserSettings.MobileUserSettings.CONTENT_AND_SOCIAL,
  IconComponent: FriendsIcon.FriendsIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.CONTENT_AND_SOCIAL,
  getComponent() {
    return ContentAndSocialSettings.ConnectedGamesPage;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ConnectedGamesRouteSetting.tsx");

export default route;
