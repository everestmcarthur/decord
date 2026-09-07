// Module ID: 14588
// Function ID: 14589
// Name: route
// Dependencies: [1074, 11473, 1114, 14589, 2]

// Module 14588 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import createToggle from "createToggle" /* 11473 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.LYju5J);
  },
  parent: null,
  unsearchable: true,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.PROFILE_CUSTOMIZATION,
  getComponent() {
    return require(14589) /* ProfileCustomizationSubsection */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ProfileCustomizationSetting.tsx");

export default route;
