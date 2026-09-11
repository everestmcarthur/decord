// Module ID: 15820
// Function ID: 15821
// Name: DesignSystemsButtonSetting
// Dependencies: [8050, 1074, 11564, 15821, 2]

// Module 15820 (DesignSystemsButtonSetting)
import Constants from "Constants" /* 1074 */;
import SettingsConstants from "SettingsConstants" /* 8050 */;
import SettingBuilders from "SettingBuilders" /* 11564 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Button";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_BUTTON,
    getComponent() {
      return require("UserSettingsDesignSystemButton").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsButtonSetting.tsx");

export default route;
