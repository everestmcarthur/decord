// Module ID: 10304
// Function ID: 10305
// Name: NotificationSettingsMessageUnreadGuildActionSheet
// Dependencies: [19, 4819, 1074, 4820, 1084, 21, 10293, 10305, 1115, 7229, 10288, 7224, 2]
// Exports: default

// Module 10304 (NotificationSettingsMessageUnreadGuildActionSheet)
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7229 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 10288 */;
import NotificationSettingsMessageUnreadActionSheetDefault from "NotificationSettingsMessageUnreadActionSheet" /* 10305 */;
import noop from "module_19" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4819 */;

const require = globalThis.__r;

const NotificationSettingsUtils = tmp3(7224);
require = fn;
const UserNotificationSettings = fn(1074).UserNotificationSettings;
const UnreadSetting = fn(4820).UnreadSetting;
let closure_6 = fn(1084).GuildNotificationSettingsFlags;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadGuildActionSheet.tsx");

export default function NotificationSettingsMessageUnreadGuildActionSheet(guildId) {
  _require = guildId;
  const guildPresetSettings = require("notificationSettingsGuildFlagUtils").useGuildPresetSettings(guildId.guildId);
  ({ unread, notification } = guildPresetSettings);
  let stringResult;
  let obj = require("notificationSettingsGuildFlagUtils");
  const tmp4 = jsx;
  if (notification === UserNotificationSettings.ALL_MESSAGES) {
    const intl = tmp(1115).intl;
    stringResult = intl.string(tmp(1115).t.eP8yWU);
  }
  return tmp4(NotificationSettingsMessageUnreadActionSheetDefault, {
    disabledMentionOnlyWithReason: stringResult,
    value: unread,
    onChange(toggleExpandedHistory) {
      const guildFlags = UserGuildSettingsStore.getGuildFlags(guildId.guildId);
      const obj = NotificationSettingsModalActionCreatorsDefault;
      if (toggleExpandedHistory === UnreadSetting.ALL_MESSAGES) {
        let UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
      } else {
        UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
      }
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = obj.updateGuildNotificationSettings(guildId.guildId, { flags: notificationSettingsFlagUtils.withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) }, NotificationLabel.unreads(toggleExpandedHistory));
    }
  });
};
