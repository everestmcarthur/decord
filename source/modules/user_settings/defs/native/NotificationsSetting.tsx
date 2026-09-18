// Module ID: 15693
// Function ID: 15694
// Name: NotificationsSetting
// Dependencies: [1074, 11714, 1115, 10021, 14669, 15694, 2]

// Module 15693 (NotificationsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import BellIcon from "BellIcon" /* 10021 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 14669 */;
import SettingBuilders from "SettingBuilders" /* 11714 */;
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
