// Module ID: 15032
// Function ID: 15033
// Name: AccountStandingSetting
// Dependencies: [8232, 1074, 11723, 1115, 15033, 15036, 2]

// Module 15032 (AccountStandingSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 8232 */;
import useAccountStandingStatusLabel from "useAccountStandingStatusLabel" /* 15033 */;
import SettingBuilders from "SettingBuilders" /* 11723 */;
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
