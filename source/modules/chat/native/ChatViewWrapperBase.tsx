// Module ID: 11393
// Function ID: 11394
// Name: ChatViewWrapperBase
// Dependencies: [19, 21, 11391, 7170, 11392, 2]
// Exports: default

// Module 11393 (ChatViewWrapperBase)
import LayerScope from "LayerScope" /* 7170 */;
import useChatViewPointerEventsDefault from "useChatViewPointerEvents" /* 11391 */;
import StickyWrapper from "StickyWrapper" /* 11392 */;
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
