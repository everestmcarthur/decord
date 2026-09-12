// Module ID: 14741
// Function ID: 14742
// Name: AccountSetting
// Dependencies: [1074, 11601, 1114, 11048, 14742, 2]

// Module 14741 (AccountSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import UserCircleIcon from "UserCircleIcon" /* 11048 */;
import SettingBuilders from "SettingBuilders" /* 11601 */;
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
