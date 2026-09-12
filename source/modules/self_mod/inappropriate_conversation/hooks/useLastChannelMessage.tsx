// Module ID: 11523
// Function ID: 11524
// Name: useLastChannelMessage
// Dependencies: [4857, 504, 2]
// Exports: useLastChannelMessage

// Module 11523 (useLastChannelMessage)
import MessageStore from "MessageStore" /* 4857 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useLastChannelMessage.tsx");

export const useLastChannelMessage = function useLastChannelMessage(channelId) {
  _require = channelId;
  const items = [MessageStore];
  return require("initialize").useStateFromStores(items, () => {
    let lastNonCurrentUserMessage = MessageStore.getLastNonCurrentUserMessage(closure_0);
    if (lastNonCurrentUserMessage == null) {
      lastNonCurrentUserMessage = MessageStore.getLastMessage(closure_0);
    }
    return lastNonCurrentUserMessage;
  });
};
