// Module ID: 15788
// Function ID: 15789
// Name: CommunityActivityAlertsSetting
// Dependencies: [10336, 8232, 1074, 504, 1115, 11723, 15789, 2]

// Module 15788 (CommunityActivityAlertsSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 10336 */;

require = fn;
const SettingBuilders = fn(11723);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.D9yVAH);
  },
  parent: fn(8232).MobileUserSettings.NOTIFICATIONS,
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
