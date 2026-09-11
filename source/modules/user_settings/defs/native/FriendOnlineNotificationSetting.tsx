// Module ID: 15566
// Function ID: 15567
// Name: FriendOnlineNotificationSetting
// Dependencies: [8050, 11564, 1114, 1935, 15567, 2]

// Module 15566 (FriendOnlineNotificationSetting)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import SettingsConstants from "SettingsConstants" /* 8050 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 15567 */;
import SettingBuilders from "SettingBuilders" /* 11564 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["uvIi/4"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.E6O06k);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: UserSettings.EnableFriendOnlineNotifications.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onFriendOnlineNotificationSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FriendOnlineNotificationSetting.tsx");

export default toggle;
