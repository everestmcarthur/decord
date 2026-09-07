// Module ID: 10173
// Function ID: 10174
// Name: NotificationSettingsMessageUnreadChannelActionSheet
// Dependencies: [19, 4741, 1074, 4742, 1084, 21, 10154, 10172, 1114, 7119, 10155, 7114, 2]
// Exports: default

// Module 10173 (NotificationSettingsMessageUnreadChannelActionSheet)
import noopAll from "noop" /* 19 */;
import NotificationSettingsMessageUnreadActionSheetDefault from "NotificationSettingsMessageUnreadActionSheet" /* 10172 */;
import closure_3 from "updateUserGuildSettingsInternal" /* 4741 */;
import { UserNotificationSettings } from "ME" /* 1074 */;
import { UnreadSetting } from "ReadStateTypes" /* 4742 */;
import { ChannelNotificationSettingsFlags as closure_6 } from "MAX_FAVORITES" /* 1084 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
let result = require("set").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadChannelActionSheet.tsx");

export default function NotificationSettingsMessageUnreadChannelActionSheet(channel) {
  const _require = channel;
  let obj = _require(10154);
  const channelPresetSettings = obj.useChannelPresetSettings(channel.channel);
  ({ unread, notification } = channelPresetSettings);
  obj = { value: unread, disabledMentionOnlyWithReason: null, onChange: null };
  let stringResult;
  if (notification === UserNotificationSettings.ALL_MESSAGES) {
    const intl = tmp(1114).intl;
    stringResult = intl.string(tmp(1114).t.eP8yWU);
  }
  obj[1] = stringResult;
  obj[2] = function onChange(ONLY_MENTIONS) {
    const channelIdFlags = closure_1_3.getChannelIdFlags(channel.channel.guild_id, channel.channel.id);
    let obj = closure_1_1(closure_1_2[9]);
    if (ONLY_MENTIONS === closure_1_5.ALL_MESSAGES) {
      let UNREADS_ONLY_MENTIONS = closure_1_6.UNREADS_ALL_MESSAGES;
    } else {
      UNREADS_ONLY_MENTIONS = closure_1_6.UNREADS_ONLY_MENTIONS;
    }
    obj = { flags: channel(closure_1_2[10]).withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) };
    const NotificationLabel = channel(closure_1_2[11]).NotificationLabel;
    const result = obj.updateChannelOverrideSettings(channel.channel.guild_id, channel.channel.id, obj, NotificationLabel.unreads(ONLY_MENTIONS));
  };
  return jsx(NotificationSettingsMessageUnreadActionSheetDefault, { value: unread, disabledMentionOnlyWithReason: null, onChange: null });
};
