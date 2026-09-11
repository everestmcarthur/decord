// Module ID: 15285
// Function ID: 15286
// Name: GuildRoleSubscriptionsCancelSetting
// Dependencies: [8050, 1074, 11564, 1114, 15286, 2]

// Module 15285 (GuildRoleSubscriptionsCancelSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 8050 */;
import SettingBuilders from "SettingBuilders" /* 11564 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["7j5bMU"]);
  },
  parent: SettingsConstants.MobileUserSettings.PREMIUM,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.GUILD_ROLE_SUBSCRIPTIONS_CANCEL,
    getComponent() {
      return require("GuildRoleSubscriptionCancelSettingScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/GuildRoleSubscriptionsCancelSetting.tsx");

export default route;
