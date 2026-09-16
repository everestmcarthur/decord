// Module ID: 17104
// Function ID: 17105
// Name: MessageRequestsPreviewScreen
// Dependencies: [19, 4653, 1074, 21, 12583, 10081, 10216, 17105, 11486, 2]
// Exports: default

// Module 17104 (MessageRequestsPreviewScreen)
import MessageManagerDefault from "MessageManager" /* 10081 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4653 */;

const require = fn;
const ME = fn(1074).ME;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx");

export default function MessageRequestsScreen(route) {
  const channelId = route.route.params.channelId;
  const ref = noop.useRef(null);
  const items = [channelId];
  const isMessageRequestRestrictedViewer = channelId(12583).useIsMessageRequestRestrictedViewer("MessageRequestsPreviewScreen");
  const effect = noop.useEffect(() => {
    const obj = MessageManagerDefault;
    const messages = obj.fetchMessages({ channelId, messageId: ReadStateStore.lastMessageId(channelId) });
  }, items);
  const obj2 = { guildId: ME, channelId, children: null };
  if (isMessageRequestRestrictedViewer) {
    const obj3 = { channelId };
    let tmp5Result = tmp5(tmp7(17105), obj3);
  } else {
    const obj4 = { guildId: tmp6, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, screenIndex: "message-request" };
    tmp5Result = tmp5(tmp7(11486), obj4);
  }
  obj2.children = tmp5Result;
  return jsx(channelId(10216).ChannelContainer, { guildId: ME, channelId, children: null });
};
