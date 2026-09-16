// Module ID: 14876
// Function ID: 14877
// Name: AccountStandingSetting
// Dependencies: [8091, 1074, 11614, 1115, 14877, 14880, 2]

// Module 14876 (AccountStandingSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 8091 */;
import useAccountStandingStatusLabel from "useAccountStandingStatusLabel" /* 14877 */;
import SettingBuilders from "SettingBuilders" /* 11614 */;
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
