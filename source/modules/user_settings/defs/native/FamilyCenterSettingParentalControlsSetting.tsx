// Module ID: 14983
// Function ID: 14984
// Name: FamilyCenterSettingParentalControlsSetting
// Dependencies: [8049, 1074, 11562, 1114, 2396, 14984, 2]

// Module 14983 (FamilyCenterSettingParentalControlsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import _modDef2396 from "module_2396" /* 2396 */;
import SettingsConstants from "SettingsConstants" /* 8049 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2396.ahKIJO);
  },
  parent: SettingsConstants.MobileUserSettings.FAMILY_CENTER,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS,
    getComponent() {
      return require("UserSettingsFamilyCenterParentalControls").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterSettingParentalControlsSetting.tsx");

export default route;
export const FamilyCenterParentalControlsSetting = route;
