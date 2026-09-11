// Module ID: 10337
// Function ID: 10338
// Name: markChannelUnread
// Dependencies: [4622, 10338, 504, 2]
// Exports: default, useCanMarkChannelUnread

// Module 10337 (markChannelUnread)
import markUnreadDefault from "markUnread" /* 10338 */;
import ReadStateStore from "ReadStateStore" /* 4622 */;

const require = globalThis.__r;

const require = fn;
const ReadState = fn(4622).ReadState;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/markChannelUnread.tsx");

export default function markChannelUnread(arg0) {
  const lastMessageId = ReadState.get(arg0).lastMessageId;
  if (null != lastMessageId) {
    markUnreadDefault(arg0, lastMessageId);
  }
};
export const useCanMarkChannelUnread = function useCanMarkChannelUnread(channel) {
  _require = channel;
  const items = [ReadStateStore];
  return require("initialize").useStateFromStores(items, () => ReadStateStore.canBeUnread(id.id) && ReadStateStore.hasLastMessage(id.id) && !id.isCategory());
};
