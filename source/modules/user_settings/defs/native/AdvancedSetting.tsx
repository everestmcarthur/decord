// Module ID: 15648
// Function ID: 15649
// Name: AdvancedSetting
// Dependencies: [1074, 11622, 1115, 7494, 15649, 2]

// Module 15648 (AdvancedSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import SettingsIcon from "SettingsIcon" /* 7494 */;
import SettingBuilders from "SettingBuilders" /* 11622 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["8/udY0"]);
  },
  parent: null,
  IconComponent: SettingsIcon.SettingsIcon,
  screen: {
    route: Constants.UserSettingsSections.ADVANCED,
    getComponent() {
      return require("SettingsAdvancedScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AdvancedSetting.tsx");

export default route;
