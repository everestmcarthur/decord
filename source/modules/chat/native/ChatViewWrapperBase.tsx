// Module ID: 11457
// Function ID: 11458
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 11455, 7230, 11456, 2]
// Exports: default

// Module 11457 (ChatViewWrapperBase)
import LayerScope from "LayerScope" /* 7230 */;
import useChatViewPointerEventsDefault from "useChatViewPointerEvents" /* 11455 */;
import StickyWrapper from "StickyWrapper" /* 11456 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapperBase.tsx");

export default function ChatViewWrapperBase(arg0) {
  ({ channelId, children, stickyHeader, style } = arg0);
  const tmp = useChatViewPointerEventsDefault(channelId);
  return jsx(LayerScope.LayerScope, { children: jsx(StickyWrapper.StickyWrapper, { header: stickyHeader, style, pointerEvents: useChatViewPointerEventsDefault(channelId), children }) });
};
