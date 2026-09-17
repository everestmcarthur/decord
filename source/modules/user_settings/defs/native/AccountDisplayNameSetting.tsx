// Module ID: 14833
// Function ID: 14834
// Name: AccountDisplayNameSetting
// Dependencies: [1372, 8111, 1074, 504, 11622, 1115, 14708, 2]

// Module 14833 (AccountDisplayNameSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const SettingBuilders = fn(11622);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["9AjdkD"]);
  },
  parent: fn(8111).MobileUserSettings.ACCOUNT,
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
