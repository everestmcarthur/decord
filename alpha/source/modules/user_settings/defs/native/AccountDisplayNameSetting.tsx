// Module ID: 14981
// Function ID: 14982
// Name: AccountDisplayNameSetting
// Dependencies: [1372, 8232, 1074, 504, 11723, 1115, 14857, 2]

// Module 14981 (AccountDisplayNameSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const SettingBuilders = fn(11723);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["9AjdkD"]);
  },
  parent: fn(8232).MobileUserSettings.ACCOUNT,
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
