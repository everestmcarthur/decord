// Module ID: 14741
// Function ID: 14742
// Name: AccountDisplayNameSetting
// Dependencies: [1371, 7989, 1074, 504, 11500, 1114, 14614, 2]

// Module 14741 (AccountDisplayNameSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const SettingBuilders = fn(11500);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["9AjdkD"]);
  },
  parent: fn(7989).MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountDisplayNameSettingTrailing() {
    const items = [UserStore];
    return initialize.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let globalName;
      if (currentUser != null) {
        globalName = currentUser.globalName;
      }
      return globalName;
    });
  },
  screen: {
    route: fn(1074).UserSettingsSections.PROFILE_CUSTOMIZATION,
    getComponent() {
      return require("ProfileCustomizationSettingScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountDisplayNameSetting.tsx");

export default route;
