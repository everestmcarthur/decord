// Module ID: 14830
// Function ID: 14831
// Name: AccountChangePasswordSetting
// Dependencies: [8050, 1074, 11564, 1114, 14831, 2]

// Module 14830 (AccountChangePasswordSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 8050 */;
import SettingBuilders from "SettingBuilders" /* 11564 */;
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
