// Module ID: 14768
// Function ID: 14769
// Name: AccountSetting
// Dependencies: [1074, 11614, 1115, 11066, 14769, 2]

// Module 14768 (AccountSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import UserCircleIcon from "UserCircleIcon" /* 11066 */;
import SettingBuilders from "SettingBuilders" /* 11614 */;
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
