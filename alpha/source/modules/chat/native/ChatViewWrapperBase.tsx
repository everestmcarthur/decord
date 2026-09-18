// Module ID: 11613
// Function ID: 11614
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 11611, 7352, 11612, 2]
// Exports: default

// Module 11613 (ChatViewWrapperBase)
import LayerScope from "LayerScope" /* 7352 */;
import useChatViewPointerEventsDefault from "useChatViewPointerEvents" /* 11611 */;
import StickyWrapper from "StickyWrapper" /* 11612 */;
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
