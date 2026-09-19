// Module ID: 11622
// Function ID: 11623
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 11620, 7396, 11621, 2]
// Exports: default

// Module 11622 (ChatViewWrapperBase)
import LayerScope from "LayerScope" /* 7396 */;
import useChatViewPointerEventsDefault from "useChatViewPointerEvents" /* 11620 */;
import StickyWrapper from "StickyWrapper" /* 11621 */;
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
