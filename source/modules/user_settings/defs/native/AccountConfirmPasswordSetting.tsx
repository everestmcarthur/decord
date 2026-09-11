// Module ID: 14834
// Function ID: 14835
// Name: AccountConfirmPasswordSetting
// Dependencies: [8050, 1074, 11564, 1114, 7067, 2]

// Module 14834 (AccountConfirmPasswordSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import UserSettingsConfirmPassword from "UserSettingsConfirmPassword" /* 7067 */;
import SettingsConstants from "SettingsConstants" /* 8050 */;
import SettingBuilders from "SettingBuilders" /* 11564 */;
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
