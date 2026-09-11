// Module ID: 15582
// Function ID: 15583
// Name: CommunityActivityAlertsSetting
// Dependencies: [10172, 8050, 1074, 504, 1114, 11564, 15583, 2]

// Module 15582 (CommunityActivityAlertsSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 10172 */;

require = fn;
const SettingBuilders = fn(11564);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.D9yVAH);
  },
  parent: fn(8050).MobileUserSettings.NOTIFICATIONS,
  useDescription: function useCommunityActivityAlertsSettingDescription() {
    const intl = util.intl;
    return intl.string(util.t["0PhAOH"]);
  },
  usePredicate: function useHasCommunityActivityAlertsSetting() {
    const items = [GuildIncidentsStore];
    return initialize.useStateFromStores(items, () => Object.keys(guildAlertSettings.getGuildAlertSettings()).length > 0);
  },
  screen: {
    route: fn(1074).UserSettingsSections.COMMUNITY_ALERTS,
    getComponent() {
      return require("UserSettingsCommunityNotifications").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/CommunityActivityAlertsSetting.tsx");

export default route;
