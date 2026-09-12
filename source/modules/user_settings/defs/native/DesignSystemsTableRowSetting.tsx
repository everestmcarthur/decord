// Module ID: 15857
// Function ID: 15858
// Name: DesignSystemsTableRowSetting
// Dependencies: [8079, 1074, 11601, 15858, 2]

// Module 15857 (DesignSystemsTableRowSetting)
import Constants from "Constants" /* 1074 */;
import SettingsConstants from "SettingsConstants" /* 8079 */;
import SettingBuilders from "SettingBuilders" /* 11601 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Table Row";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_TABLE_ROW,
    getComponent() {
      return require("UserSettingsDesignSystemTableRow").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTableRowSetting.tsx");

export default route;
