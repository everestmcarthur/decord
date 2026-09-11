// Module ID: 15026
// Function ID: 15027
// Name: ClipsSetting
// Dependencies: [1074, 11564, 1114, 15027, 15029, 2]

// Module 15026 (ClipsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import ClipsIcon from "ClipsIcon" /* 15027 */;
import SettingBuilders from "SettingBuilders" /* 11564 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.z2jK6X);
  },
  parent: null,
  IconComponent: ClipsIcon.ClipsIcon,
  screen: {
    route: Constants.UserSettingsSections.CLIPS,
    getComponent() {
      return require("SettingsClipsScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ClipsSetting.tsx");

export default route;
