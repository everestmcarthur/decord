// Module ID: 15805
// Function ID: 15806
// Name: route
// Dependencies: [7975, 1074, 11473, 1114, 15806, 2]

// Module 15805 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import createToggle from "createToggle" /* 11473 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.gMlDNd);
  },
  parent: MobileUserSettings.MobileUserSettings.PREMIUM,
  unsearchable: true,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT,
  getComponent() {
    return require(15806) /* ProfileCustomizationTryItOutSettingScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/PremiumProfileCustomizationTryItOutSetting.tsx");

export default route;
