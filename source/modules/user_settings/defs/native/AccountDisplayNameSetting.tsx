// Module ID: 14798
// Function ID: 14799
// Name: AccountDisplayNameSetting
// Dependencies: [1371, 8079, 1074, 504, 11601, 1114, 14673, 2]

// Module 14798 (AccountDisplayNameSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const SettingBuilders = fn(11601);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["9AjdkD"]);
  },
  parent: fn(8079).MobileUserSettings.ACCOUNT,
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
