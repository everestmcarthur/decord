// Module ID: 15520
// Function ID: 15521
// Name: route
// Dependencies: [10085, 7975, 1074, 504, 1114, 11473, 15521, 2]

// Module 15520 (route)
import initialize from "initialize" /* 504 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import closure_2 from "computeAlertSettings" /* 10085 */;
import createToggle from "createToggle" /* 11473 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.D9yVAH);
  },
  parent: require("MobileUserSettings").MobileUserSettings.NOTIFICATIONS,
  useDescription: function useCommunityActivityAlertsSettingDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["0PhAOH"]);
  },
  usePredicate: function useHasCommunityActivityAlertsSetting() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => Object.keys(guildAlertSettings.getGuildAlertSettings()).length > 0);
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.COMMUNITY_ALERTS,
  getComponent() {
    return require(15521) /* UserSettingsCommunityNotifications */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/CommunityActivityAlertsSetting.tsx");

export default createToggle;
