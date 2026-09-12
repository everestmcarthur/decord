// Module ID: 15026
// Function ID: 15027
// Name: AuthorizedAppsSetting
// Dependencies: [1074, 11601, 1114, 7059, 15027, 2]

// Module 15026 (AuthorizedAppsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import KeyIcon from "KeyIcon" /* 7059 */;
import SettingBuilders from "SettingBuilders" /* 11601 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["f6kk+r"]);
  },
  parent: null,
  IconComponent: KeyIcon.KeyIcon,
  screen: {
    route: Constants.UserSettingsSections.AUTHORIZED_APPS,
    getComponent() {
      return require("UserSettingsAuthedApps").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppsSetting.tsx");

export default route;
