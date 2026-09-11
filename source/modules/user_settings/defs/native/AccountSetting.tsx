// Module ID: 14710
// Function ID: 14711
// Name: AccountSetting
// Dependencies: [1074, 11564, 1114, 11011, 14711, 2]

// Module 14710 (AccountSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import UserCircleIcon from "UserCircleIcon" /* 11011 */;
import SettingBuilders from "SettingBuilders" /* 11564 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["ldCE/p"]);
  },
  parent: null,
  IconComponent: UserCircleIcon.UserCircleIcon,
  screen: {
    route: Constants.UserSettingsSections.ACCOUNT,
    getComponent() {
      return require("SettingsAccountScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountSetting.tsx");

export default route;
