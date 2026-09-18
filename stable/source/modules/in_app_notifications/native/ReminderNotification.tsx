// Module ID: 11323
// Function ID: 11324
// Name: ReminderNotification
// Dependencies: [19, 17, 1957, 1979, 10100, 1074, 21, 4560, 1178, 4523, 576, 10099, 10179, 504, 1094, 10177, 10112, 10114, 7880, 38, 1114, 4763, 7860, 7861, 1242, 10175, 2]

// Module 11323 (ReminderNotification)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ClockIcon from "ClockIcon" /* 4523 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import showForLaterModal from "showForLaterModal" /* 7860 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7861 */;
import MessagePreviewTextDefault from "MessagePreviewText" /* 10112 */;
import MessageNotificationHeaderDefault from "MessageNotificationHeader" /* 10177 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;

const MediaPreviewRightAccessory = tmp2(10179);
require = fn;
function NotificationAvatar(arg0) {
  ({ user, guildId } = arg0);
  const tmp = closure_13();
  const obj = { style: tmp.avatarContainer, children: null };
  const items = [closure_1_10(native.Avatar, { user, guildId, size: native.AvatarSizes.NORMAL, cutout: obj3 }), ];
  obj3 = { style: tmp.cutoutIconContainer, children: null };
  const obj2 = { user, guildId, size: native.AvatarSizes.NORMAL, cutout: obj3 };
  obj3.children = closure_1_10(ClockIcon.ClockIcon, { size: "xs", color: nativeDefault.colors.ICON_SUBTLE });
  items[1] = closure_1_10(View, obj3);
  obj.children = items;
  return closure_1_11(View, obj);
}
function NotificationBody(channel) {
  channel = channel.channel;
  const message = channel.message;
  const items = [GuildStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
  const obj = channel(504);
  const items1 = [ChannelStore];
  const stateFromStores1 = channel(504).useStateFromStores(items1, () => ChannelStore.getChannel(channel.parent_id));
  const obj2 = channel(504);
  const hasPreviewableMedia = channel(10099).useHasPreviewableMedia(message);
  const tmp6 = channel.type === channel(1094).ChannelTypes.DM;
  let num = 1;
  if (tmp6) {
    num = closure_8;
  }
  obj3 = channel(10099);
  let tmp10 = null;
  const messagePreviewTextVariant = channel(10099).getMessagePreviewTextVariant();
  if (!tmp6) {
    const obj4 = { channel, parentChannel: stateFromStores1, guild: stateFromStores, author: null };
    tmp10 = closure_10(MessageNotificationHeaderDefault, obj4);
  }
  const items2 = [tmp10, ];
  if (!hasPreviewableMedia) {
    if (null == message.poll) {
      const obj5 = { channel, message, color: "text-default", layout: tmp(7880).ChannelListLayoutTypes.COZY, variant: messagePreviewTextVariant, muted: false, lineClamp: num };
      let tmp14 = closure_10(tmp(10114).ChannelRowPreview, obj5);
    }
    const obj6 = { children: null };
    items2[1] = tmp14;
    obj6.children = items2;
    return closure_11(closure_12, obj6);
  }
  tmp14 = closure_10(MessagePreviewTextDefault, { message, lineClamp: num, showMessageAuthor: true, maxHeight });
}
const View = fn(17).View;
const InAppNotificationConstants = fn(10100);
({ IN_APP_NOTIFICATION_MAX_HEIGHT: closure_7, NOTIFICATION_PREVIEW_LINE_CLAMP: closure_8, RIGHT_ACCESSORY_LEFT_MARGIN } = InAppNotificationConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4560);
let closure_13 = createStyles.createStyles({ cutoutIconContainer: { position: "absolute", right: 0, bottom: 0 }, avatarContainer: { position: "relative" }, rightAccessoryContainer: { marginLeft: RIGHT_ACCESSORY_LEFT_MARGIN } });
let obj3 = { direction: fn(1178).CutoutDirection.BOTTOM_RIGHT, radius: 10, inset: -2 };
let closure_16 = noop.memo((message) => {
  message = message.message;
  const tmp = closure_13();
  let tmp4 = null;
  if (obj.useHasPreviewableMedia(message)) {
    const obj2 = { style: tmp.rightAccessoryContainer, children: null };
    obj3 = { message };
    obj2.children = closure_1_10(MediaPreviewRightAccessory.MediaPreviewRightAccessory, obj3);
    tmp4 = closure_1_10(View, obj2);
  }
  return tmp4;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/ReminderNotification.tsx");

export default noop.memo(function ReminderNotification(notification) {
  notification = notification.notification;
  const channel = notification.channel;
  const message = notification.savedMessage.message;
  _modDef38(null != message, "Message in a notification should not be null.");
  const items = [notification];
  const memo = noop.useMemo(() => {
    const obj = { type: "simple", text: null };
    const intl = notification(1114).intl;
    obj.text = intl.string(notification(1114).t.Whs8tE);
    return obj;
  }, []);
  const callback = noop.useCallback(() => {
    ModalActionCreatorsDefault.popAll();
    showForLaterModal.showForLaterModal(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
    ({ savedMessage, author } = notification);
    AnalyticsUtilsDefault.track(AnalyticEvents.FOR_LATER_REMINDER_NOTIFICATION_CLICKED, { message_id: savedMessage.saveData.messageId, message_author_id: author.id, notification_type: "IN_APP" });
  }, items);
  let obj = { user: notification.author, guildId: channel.guild_id };
  const tmp2 = closure_10(NotificationAvatar, { user: notification.author, guildId: channel.guild_id });
  return closure_10(notification(10175).NotificationPressable, { icon: closure_10(NotificationAvatar, { user: notification.author, guildId: channel.guild_id }), header: memo, onPress: callback, notification, rightAccessory: closure_10(closure_16, { message }), children: closure_10(NotificationBody, { channel, message }) });
});
