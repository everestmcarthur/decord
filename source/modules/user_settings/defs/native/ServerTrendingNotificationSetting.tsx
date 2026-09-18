// Module ID: 15723
// Function ID: 15724
// Name: ServerTrendingNotificationSetting
// Dependencies: [8194, 11714, 1115, 1936, 15724, 2]

// Module 15723 (ServerTrendingNotificationSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 1936 */;
import SettingsConstants from "SettingsConstants" /* 8194 */;
import ServerTrendingNotificationUtils from "ServerTrendingNotificationUtils" /* 15724 */;
import SettingBuilders from "SettingBuilders" /* 11714 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.Q3VWjI);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.Wc1RcU);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableServerTrendingNotifications.useSetting,
  onValueChange: ServerTrendingNotificationUtils.onServerTrendingNotificationSettingsChanged,
  usePredicate() {
    return false;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ServerTrendingNotificationSetting.tsx");

export default toggle;
