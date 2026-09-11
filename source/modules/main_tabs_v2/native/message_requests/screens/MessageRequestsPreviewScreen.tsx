// Module ID: 16980
// Function ID: 16981
// Name: MessageRequestsPreviewScreen
// Dependencies: [19, 4621, 1074, 21, 12533, 10032, 10167, 16981, 11434, 2]
// Exports: default

// Module 16980 (MessageRequestsPreviewScreen)
import MessageManagerDefault from "MessageManager" /* 10032 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4621 */;

const require = fn;
const ME = fn(1074).ME;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx");

export default function MessageRequestsScreen(route) {
  const channelId = route.route.params.channelId;
  const ref = noop.useRef(null);
  const items = [channelId];
  const isMessageRequestRestrictedViewer = channelId(12533).useIsMessageRequestRestrictedViewer("MessageRequestsPreviewScreen");
  const effect = noop.useEffect(() => {
    const obj = MessageManagerDefault;
    const messages = obj.fetchMessages({ channelId, messageId: ReadStateStore.lastMessageId(channelId) });
  }, items);
  const obj2 = { guildId: ME, channelId, children: null };
  if (isMessageRequestRestrictedViewer) {
    const obj3 = { channelId };
    let tmp5Result = tmp5(tmp7(16981), obj3);
  } else {
    const obj4 = { guildId: tmp6, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, screenIndex: "message-request" };
    tmp5Result = tmp5(tmp7(11434), obj4);
  }
  obj2.children = tmp5Result;
  return jsx(channelId(10167).ChannelContainer, { guildId: ME, channelId, children: null });
};
