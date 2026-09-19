// Module ID: 15256
// Function ID: 15257
// Name: PremiumManagePlanSetting
// Dependencies: [8232, 1074, 11723, 1115, 15257, 2]

// Module 15256 (PremiumManagePlanSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 8232 */;
import SettingBuilders from "SettingBuilders" /* 11723 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["8jmdON"]);
  },
  parent: SettingsConstants.MobileUserSettings.PREMIUM,
  screen: {
    route: Constants.UserSettingsSections.PREMIUM_MANAGE_PLAN,
    getComponent() {
      return require("PremiumManagePlanScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumManagePlanSetting.tsx");

export default route;
