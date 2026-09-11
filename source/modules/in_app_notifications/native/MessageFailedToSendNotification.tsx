// Module ID: 10270
// Function ID: 10271
// Name: MessageFailedToSendNotification
// Dependencies: [19, 17, 21, 4607, 576, 1114, 4618, 4538, 10261, 10271, 10198, 2]

// Module 10270 (MessageFailedToSendNotification)
import nativeDefault from "native" /* 576 */;
import Client from "Client" /* 4538 */;
import transitionToChannel from "transitionToChannel" /* 4618 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4607);
let obj = { iconContainer: null };
let size = { width: 40, height: 40, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.md };
obj.iconContainer = size;
let closure_6 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MessageFailedToSendNotification.tsx");

export default noop.memo(function MessageFailedToSendNotification(notification) {
  notification = notification.notification;
  let channelId;
  let obj = { type: "simple", text: null };
  const intl = channelId(1114).intl;
  obj.text = intl.string(channelId(1114).t.Q0x94X);
  channelId = notification.channelId;
  const messageId = notification.messageId;
  const items = [channelId, messageId];
  const callback = noop.useCallback(() => {
    const obj = transitionToChannel;
    obj.transitionToMessage(channelId, messageId, { jumpType: Client.JumpType.INSTANT });
  }, items);
  const obj2 = { icon: null, children: null, header: null, onPress: null, notification: null };
  const obj3 = { style: closure_6().iconContainer, children: null };
  const tmp = closure_6();
  obj3.children = jsx(channelId(10271).RetryIcon, { size: "md", color: messageId(576).colors.ICON_SUBTLE });
  obj2.icon = <View style={closure_6().iconContainer}>{null}</View>;
  const obj5 = { text: null };
  const intl2 = channelId(1114).intl;
  obj5.text = intl2.string(channelId(1114).t.xxRPOT);
  obj2.children = jsx(channelId(10198).SystemMessageText, { text: null });
  obj2.header = obj;
  obj2.onPress = callback;
  obj2.notification = notification;
  return jsx(channelId(10261).NotificationPressable, { icon: null, children: null, header: null, onPress: null, notification: null });
});
