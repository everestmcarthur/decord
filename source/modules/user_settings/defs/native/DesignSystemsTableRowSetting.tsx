// Module ID: 15833
// Function ID: 15834
// Name: DesignSystemsTableRowSetting
// Dependencies: [8049, 1074, 11562, 15834, 2]

// Module 15833 (DesignSystemsTableRowSetting)
import Constants from "Constants" /* 1074 */;
import SettingsConstants from "SettingsConstants" /* 8049 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
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
