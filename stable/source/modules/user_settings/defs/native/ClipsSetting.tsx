// Module ID: 14974
// Function ID: 14975
// Name: ClipsSetting
// Dependencies: [1074, 11473, 1114, 14975, 14977, 2]

// Module 14974 (ClipsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import ClipsIcon from "ClipsIcon" /* 14975 */;
import SettingBuilders from "SettingBuilders" /* 11473 */;
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
