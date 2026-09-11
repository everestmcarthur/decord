// Module ID: 14833
// Function ID: 14834
// Name: AccountConfirmPasswordSetting
// Dependencies: [8049, 1074, 11562, 1114, 7066, 2]

// Module 14833 (AccountConfirmPasswordSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import UserSettingsConfirmPassword from "UserSettingsConfirmPassword" /* 7066 */;
import SettingsConstants from "SettingsConstants" /* 8049 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
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
