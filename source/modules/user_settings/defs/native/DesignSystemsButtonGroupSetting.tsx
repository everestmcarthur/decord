// Module ID: 15882
// Function ID: 15883
// Name: DesignSystemsButtonGroupSetting
// Dependencies: [8091, 1074, 11614, 15883, 2]

// Module 15882 (DesignSystemsButtonGroupSetting)
import Constants from "Constants" /* 1074 */;
import SettingsConstants from "SettingsConstants" /* 8091 */;
import SettingBuilders from "SettingBuilders" /* 11614 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Button Group";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_BUTTON_GROUP,
    getComponent() {
      return require("UserSettingsDesignSystemButtonGroup").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsButtonGroupSetting.tsx");

export default route;
