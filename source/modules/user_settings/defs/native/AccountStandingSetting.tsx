// Module ID: 14818
// Function ID: 14819
// Name: AccountStandingSetting
// Dependencies: [8050, 1074, 11564, 1114, 14819, 14822, 2]

// Module 14818 (AccountStandingSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 8050 */;
import useAccountStandingStatusLabel from "useAccountStandingStatusLabel" /* 14819 */;
import SettingBuilders from "SettingBuilders" /* 11564 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["16r9jm"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  useTrailing: useAccountStandingStatusLabel.useAccountStandingStatusLabel,
  screen: {
    route: Constants.UserSettingsSections.ACCOUNT_STANDING,
    getComponent() {
      return require("SettingsAccountStandingScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountStandingSetting.tsx");

export default route;
