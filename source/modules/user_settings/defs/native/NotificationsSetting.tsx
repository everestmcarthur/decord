// Module ID: 15564
// Function ID: 15565
// Name: NotificationsSetting
// Dependencies: [1074, 11601, 1114, 9906, 14538, 15565, 2]

// Module 15564 (NotificationsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import BellIcon from "BellIcon" /* 9906 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 14538 */;
import SettingBuilders from "SettingBuilders" /* 11601 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.HcoRu0);
  },
  parent: null,
  IconComponent: BellIcon.BellIcon,
  usePredicate() {
    return !notifications_NotificationSettingsUtils.useIsDeclarativeSettingsUIAvailable("LegacyNotificationsSetting");
  },
  screen: {
    route: Constants.UserSettingsSections.NOTIFICATIONS,
    getComponent() {
      return require("SettingsNotificationScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotificationsSetting.tsx");

export default route;
