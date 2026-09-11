// Module ID: 10251
// Function ID: 10252
// Name: NotificationSettingsMessageNotificationGuildActionSheet
// Dependencies: [19, 4788, 1074, 4789, 1084, 21, 10246, 10252, 1114, 10241, 7193, 7188, 2]
// Exports: default

// Module 10251 (NotificationSettingsMessageNotificationGuildActionSheet)
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7188 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7193 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 10241 */;
import noop from "module_19" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4788 */;

const require = globalThis.__r;

require = fn;
const UserNotificationSettings = fn(1074).UserNotificationSettings;
const UnreadSetting = fn(4789).UnreadSetting;
let closure_6 = fn(1084).GuildNotificationSettingsFlags;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotificationGuildActionSheet.tsx");

export default function NotificationSettingsMessageNotificationGuildActionSheet(guildId) {
  _require = guildId;
  const guildPresetSettings = require("notificationSettingsGuildFlagUtils").useGuildPresetSettings(guildId.guildId);
  const unread = guildPresetSettings.unread;
  const notification = guildPresetSettings.notification;
  let obj2 = { context: "guild", value: notification, allMessagesSubLabel: null, onChange: null };
  let stringResult;
  let obj = require("notificationSettingsGuildFlagUtils");
  const tmp4 = jsx;
  if (notification !== UserNotificationSettings.ALL_MESSAGES) {
    if (unread !== UnreadSetting.ALL_MESSAGES) {
      const intl = tmp(1114).intl;
      stringResult = intl.string(tmp(1114).t.eP8yWU);
    }
  }
  obj2.allMessagesSubLabel = stringResult;
  obj2.onChange = function onChange(message_notifications) {
    const obj = { message_notifications };
    let tmp = message_notifications === UserNotificationSettings.ALL_MESSAGES;
    if (tmp) {
      tmp = unread !== UnreadSetting.ALL_MESSAGES;
    }
    if (tmp) {
      obj.flags = notificationSettingsFlagUtils.withGuildUnreadFlags(UserGuildSettingsStore.getGuildFlags(guildId.guildId), constants.UNREADS_ALL_MESSAGES);
    }
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(guildId.guildId, obj, NotificationLabel.notifications(message_notifications));
  };
  return tmp4(unread(10252), obj2);
};
