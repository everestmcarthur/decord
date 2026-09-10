// Module ID: 16991
// Function ID: 16992
// Name: MessageRequestsPreviewScreen
// Dependencies: [19, 4620, 1074, 21, 12510, 10011, 10147, 16992, 11412, 2]
// Exports: default

// Module 16991 (MessageRequestsPreviewScreen)
import MessageManagerDefault from "MessageManager" /* 10011 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4620 */;

const require = fn;
const ME = fn(1074).ME;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx");

export default function MessageRequestsScreen(route) {
  const channelId = route.route.params.channelId;
  const ref = noop.useRef(null);
  const items = [channelId];
  const isMessageRequestRestrictedViewer = channelId(12510).useIsMessageRequestRestrictedViewer("MessageRequestsPreviewScreen");
  const effect = noop.useEffect(() => {
    const obj = MessageManagerDefault;
    const messages = obj.fetchMessages({ channelId, messageId: ReadStateStore.lastMessageId(channelId) });
  }, items);
  const obj2 = { guildId: ME, channelId, children: null };
  if (isMessageRequestRestrictedViewer) {
    const obj3 = { channelId };
    let tmp5Result = tmp5(tmp7(16992), obj3);
  } else {
    const obj4 = { guildId: tmp6, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, screenIndex: "message-request" };
    tmp5Result = tmp5(tmp7(11412), obj4);
  }
  obj2.children = tmp5Result;
  return jsx(channelId(10147).ChannelContainer, { guildId: ME, channelId, children: null });
};
