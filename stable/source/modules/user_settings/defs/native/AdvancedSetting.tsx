// Module ID: 15530
// Function ID: 15531
// Name: AdvancedSetting
// Dependencies: [1074, 11473, 1114, 7380, 15531, 2]

// Module 15530 (AdvancedSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import SettingsIcon from "SettingsIcon" /* 7380 */;
import SettingBuilders from "SettingBuilders" /* 11473 */;
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
