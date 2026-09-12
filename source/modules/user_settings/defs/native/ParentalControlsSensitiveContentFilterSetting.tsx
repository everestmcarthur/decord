// Module ID: 15981
// Function ID: 15982
// Name: ParentalControlsSensitiveContentFilterSetting
// Dependencies: [8079, 1074, 11601, 1114, 5162, 15982, 2]

// Module 15981 (ParentalControlsSensitiveContentFilterSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import ImageWarningIcon from "ImageWarningIcon" /* 5162 */;
import SettingsConstants from "SettingsConstants" /* 8079 */;
import SettingBuilders from "SettingBuilders" /* 11601 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["Hj/But"]);
  },
  IconComponent: ImageWarningIcon.ImageWarningIcon,
  parent: SettingsConstants.MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  screen: {
    route: Constants.UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
    getComponent() {
      return require("ParentalControlsSensitiveContentFiltersScreen").default;
    }
  },
  unsearchable: true
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsSensitiveContentFilterSetting.tsx");

export default route;
