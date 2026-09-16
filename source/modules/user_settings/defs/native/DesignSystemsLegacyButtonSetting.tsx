// Module ID: 15880
// Function ID: 15881
// Name: DesignSystemsLegacyButtonSetting
// Dependencies: [8091, 1074, 11614, 15881, 2]

// Module 15880 (DesignSystemsLegacyButtonSetting)
import Constants from "Constants" /* 1074 */;
import SettingsConstants from "SettingsConstants" /* 8091 */;
import SettingBuilders from "SettingBuilders" /* 11614 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Legacy Button";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_LEGACY_BUTTON,
    getComponent() {
      return require("UserSettingsDesignSystemLegacyButton").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsLegacyButtonSetting.tsx");

export default route;
