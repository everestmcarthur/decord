// Module ID: 15987
// Function ID: 15988
// Name: ManageSponsoredContentSetting
// Dependencies: [8091, 1074, 11614, 1115, 2071, 15988, 2]

// Module 15987 (ManageSponsoredContentSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import _modDef2071 from "module_2071" /* 2071 */;
import SettingsConstants from "SettingsConstants" /* 8091 */;
import SettingBuilders from "SettingBuilders" /* 11614 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2071.yyhs9L);
  },
  parent: SettingsConstants.MobileUserSettings.SPONSORED_CONTENT_PREFERENCES,
  screen: {
    route: Constants.UserSettingsSections.MANAGE_SPONSORED_CONTENT,
    getComponent() {
      return require("ManageSponsoredContentScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ManageSponsoredContentSetting.tsx");

export default route;
