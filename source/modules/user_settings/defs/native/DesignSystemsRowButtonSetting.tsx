// Module ID: 15829
// Function ID: 15830
// Name: DesignSystemsRowButtonSetting
// Dependencies: [8050, 1074, 11564, 15830, 2]

// Module 15829 (DesignSystemsRowButtonSetting)
import Constants from "Constants" /* 1074 */;
import SettingsConstants from "SettingsConstants" /* 8050 */;
import SettingBuilders from "SettingBuilders" /* 11564 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Row Button";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_ROW_BUTTON,
    getComponent() {
      return require("UserSettingsDesignSystemRowButton").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsRowButtonSetting.tsx");

export default route;
