// Module ID: 14902
// Function ID: 14903
// Name: AccountConfirmPasswordSetting
// Dependencies: [8111, 1074, 11622, 1115, 7107, 2]

// Module 14902 (AccountConfirmPasswordSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import UserSettingsConfirmPassword from "UserSettingsConfirmPassword" /* 7107 */;
import SettingsConstants from "SettingsConstants" /* 8111 */;
import SettingBuilders from "SettingBuilders" /* 11622 */;
import size from "module_2" /* 2 */;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["7qKDrE"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.ACCOUNT_CONFIRM_PASSWORD,
    getComponent() {
      return UserSettingsConfirmPassword.UserSettingsConfirmPasswordWrapped;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountConfirmPasswordSetting.tsx");

export default route;
