// Module ID: 16094
// Function ID: 16095
// Name: DesignSystemsTooltipSetting
// Dependencies: [8232, 1074, 11723, 16095, 2]

// Module 16094 (DesignSystemsTooltipSetting)
import Constants from "Constants" /* 1074 */;
import SettingsConstants from "SettingsConstants" /* 8232 */;
import SettingBuilders from "SettingBuilders" /* 11723 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Tooltip";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_TOOLTIP,
    getComponent() {
      return require("UserSettingsDesignSystemTooltip").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTooltipSetting.tsx");

export default route;
