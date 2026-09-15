// Module ID: 11499
// Function ID: 11500
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 11497, 7263, 11498, 2]
// Exports: default

// Module 11499 (ChatViewWrapperBase)
import LayerScope from "LayerScope" /* 7263 */;
import useChatViewPointerEventsDefault from "useChatViewPointerEvents" /* 11497 */;
import StickyWrapper from "StickyWrapper" /* 11498 */;
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
