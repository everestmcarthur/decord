// Module ID: 14924
// Function ID: 14925
// Name: AccountSetting
// Dependencies: [1074, 11723, 1115, 11180, 14925, 2]

// Module 14924 (AccountSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import UserCircleIcon from "UserCircleIcon" /* 11180 */;
import SettingBuilders from "SettingBuilders" /* 11723 */;
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
