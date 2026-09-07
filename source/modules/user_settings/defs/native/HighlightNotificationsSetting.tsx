// Module ID: 15522
// Function ID: 15523
// Name: useHighlightNotifications
// Dependencies: [1979, 7975, 1074, 504, 11473, 1114, 15523, 2]
// Exports: useHighlightNotifications

// Module 15522 (useHighlightNotifications)
import initialize from "initialize" /* 504 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import closure_2 from "createGuildRecordFromRust" /* 1979 */;
import createToggle from "createToggle" /* 11473 */;

require = arg1;
function useHighlightNotifications() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => guildCount.getGuildCount() > 0);
}
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.o8Bypv);
  },
  parent: require("MobileUserSettings").MobileUserSettings.NOTIFICATIONS,
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["Vw/Xn8"]);
  },
  usePredicate: useHighlightNotifications,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.HIGHLIGHT_NOTIFICATIONS,
  getComponent() {
    return require(15523) /* Row */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/HighlightNotificationsSetting.tsx");

export default createToggle;
export { useHighlightNotifications };
