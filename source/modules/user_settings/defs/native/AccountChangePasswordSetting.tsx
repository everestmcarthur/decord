// Module ID: 14898
// Function ID: 14899
// Name: AccountChangePasswordSetting
// Dependencies: [8111, 1074, 11622, 1115, 14899, 2]

// Module 14898 (AccountChangePasswordSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 8111 */;
import SettingBuilders from "SettingBuilders" /* 11622 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["CIGa+7"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  screen: {
    route: Constants.UserSettingsSections.ACCOUNT_CHANGE_PASSWORD,
    getComponent() {
      return require("AccountEditPassword").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountChangePasswordSetting.tsx");

export default route;
