// Module ID: 15151
// Function ID: 15152
// Name: FamilyCenterScheduleDowntimeSetting
// Dependencies: [8194, 1074, 11714, 1115, 2480, 15152, 2]

// Module 15151 (FamilyCenterScheduleDowntimeSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import _modDef2480 from "module_2480" /* 2480 */;
import SettingsConstants from "SettingsConstants" /* 8194 */;
import SettingBuilders from "SettingBuilders" /* 11714 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2480["w/ISB8"]);
  },
  parent: SettingsConstants.MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.FAMILY_CENTER_SCHEDULE_DOWNTIME,
    getComponent() {
      return require("ScheduleDowntimeScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterScheduleDowntimeSetting.tsx");

export default route;
