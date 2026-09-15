// Module ID: 17047
// Function ID: 17048
// Name: MessageRequestsPreviewScreen
// Dependencies: [19, 4654, 1074, 21, 12575, 10073, 10208, 17048, 11478, 2]
// Exports: default

// Module 17047 (MessageRequestsPreviewScreen)
import MessageManagerDefault from "MessageManager" /* 10073 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4654 */;

const require = fn;
const ME = fn(1074).ME;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx");

export default function MessageRequestsScreen(route) {
  const channelId = route.route.params.channelId;
  const ref = noop.useRef(null);
  const items = [channelId];
  const isMessageRequestRestrictedViewer = channelId(12575).useIsMessageRequestRestrictedViewer("MessageRequestsPreviewScreen");
  const effect = noop.useEffect(() => {
    const obj = MessageManagerDefault;
    const messages = obj.fetchMessages({ channelId, messageId: ReadStateStore.lastMessageId(channelId) });
  }, items);
  const obj2 = { guildId: ME, channelId, children: null };
  if (isMessageRequestRestrictedViewer) {
    const obj3 = { channelId };
    let tmp5Result = tmp5(tmp7(17048), obj3);
  } else {
    const obj4 = { guildId: tmp6, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, screenIndex: "message-request" };
    tmp5Result = tmp5(tmp7(11478), obj4);
  }
  obj2.children = tmp5Result;
  return jsx(channelId(10208).ChannelContainer, { guildId: ME, channelId, children: null });
};
