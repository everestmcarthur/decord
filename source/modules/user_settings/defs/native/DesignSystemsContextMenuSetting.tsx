// Module ID: 15843
// Function ID: 15844
// Name: DesignSystemsContextMenuSetting
// Dependencies: [8050, 1074, 11564, 15844, 2]

// Module 15843 (DesignSystemsContextMenuSetting)
import Constants from "Constants" /* 1074 */;
import SettingsConstants from "SettingsConstants" /* 8050 */;
import SettingBuilders from "SettingBuilders" /* 11564 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Context Menu";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_CONTEXT_MENU,
    getComponent() {
      return require("UserSettingsDesignSystemContextMenu").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsContextMenuSetting.tsx");

export default route;
