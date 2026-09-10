// Module ID: 15609
// Function ID: 15610
// Name: AdvancedSetting
// Dependencies: [1074, 11540, 1114, 7432, 15610, 2]

// Module 15609 (AdvancedSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import SettingsIcon from "SettingsIcon" /* 7432 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
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
