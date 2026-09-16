// Module ID: 10306
// Function ID: 10307
// Name: NotificationSettingsMessageUnreadChannelActionSheet
// Dependencies: [19, 4819, 1074, 4820, 1084, 21, 10287, 10305, 1115, 7229, 10288, 7224, 2]
// Exports: default

// Module 10306 (NotificationSettingsMessageUnreadChannelActionSheet)
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
let closure_6 = fn(1084).ChannelNotificationSettingsFlags;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadChannelActionSheet.tsx");

export default function NotificationSettingsMessageUnreadChannelActionSheet(channel) {
  _require = channel;
  const channelPresetSettings = require("notficationSettingsChannelFlagUtils").useChannelPresetSettings(channel.channel);
  ({ unread, notification } = channelPresetSettings);
  let obj2 = { value: unread, disabledMentionOnlyWithReason: null, onChange: null };
  let stringResult;
  let obj = require("notficationSettingsChannelFlagUtils");
  const tmp4 = jsx;
  if (notification === UserNotificationSettings.ALL_MESSAGES) {
    const intl = tmp(1115).intl;
    stringResult = intl.string(tmp(1115).t.eP8yWU);
  }
  obj2.disabledMentionOnlyWithReason = stringResult;
  obj2.onChange = function onChange(toggleExpandedHistory) {
    const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(channel.channel.guild_id, channel.channel.id);
    const obj = NotificationSettingsModalActionCreatorsDefault;
    if (toggleExpandedHistory === UnreadSetting.ALL_MESSAGES) {
      let UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
    } else {
      UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
    }
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result = obj.updateChannelOverrideSettings(channel.channel.guild_id, channel.channel.id, { flags: notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) }, NotificationLabel.unreads(toggleExpandedHistory));
  };
  return tmp4(NotificationSettingsMessageUnreadActionSheetDefault, obj2);
};
