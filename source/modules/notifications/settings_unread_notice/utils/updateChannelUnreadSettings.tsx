// Module ID: 11515
// Function ID: 11516
// Name: updateChannelUnreadSettings
// Dependencies: [4788, 1074, 4789, 1084, 7193, 10241, 7188, 2]
// Exports: default

// Module 11515 (updateChannelUnreadSettings)
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7188 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7193 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 10241 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4788 */;

require = fn;
const AnalyticsObjects = fn(1074).AnalyticsObjects;
const UnreadSetting = fn(4789).UnreadSetting;
const constants = fn(1084).ChannelNotificationSettingsFlags;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings_unread_notice/utils/updateChannelUnreadSettings.tsx");

export default function updateChannelUnreadSettings(guild_id, id, UNREADS_ONLY_MENTIONS) {
  const obj2 = { flags: null };
  const obj = NotificationSettingsModalActionCreatorsDefault;
  obj2.flags = notificationSettingsFlagUtils.withChannelUnreadFlags(UserGuildSettingsStore.getChannelIdFlags(guild_id, id), UNREADS_ONLY_MENTIONS);
  const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
  if (UNREADS_ONLY_MENTIONS === constants.UNREADS_ALL_MESSAGES) {
    let ONLY_MENTIONS = UnreadSetting.ALL_MESSAGES;
  } else {
    ONLY_MENTIONS = UnreadSetting.ONLY_MENTIONS;
  }
  const result = obj.updateChannelOverrideSettings(guild_id, id, obj2, NotificationLabel.unreads(ONLY_MENTIONS), { object: AnalyticsObjects.NOTIFICATION_SETTING_UNREAD_NOTICE });
};
