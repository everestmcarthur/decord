// Module ID: 16016
// Function ID: 16017
// Name: NotifyFriendsOnComeOnlineSetting
// Dependencies: [8082, 11606, 1115, 2563, 1936, 15600, 2]

// Module 16016 (NotifyFriendsOnComeOnlineSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 1936 */;
import _modDef2563 from "module_2563" /* 2563 */;
import SettingsConstants from "SettingsConstants" /* 8082 */;
import FriendOnlineNotificationUtils from "FriendOnlineNotificationUtils" /* 15600 */;
import SettingBuilders from "SettingBuilders" /* 11606 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2563.A0FVCV);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2563.vHX6RG);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.NotifyFriendsOnComeOnline.useSetting,
  onValueChange: FriendOnlineNotificationUtils.onNotifyFriendsOnComeOnlineSettingsChanged
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotifyFriendsOnComeOnlineSetting.tsx");

export default toggle;
