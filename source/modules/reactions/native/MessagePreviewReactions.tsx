// Module ID: 11361
// Function ID: 11362
// Name: MessagePreviewReactions
// Dependencies: [19, 7668, 8446, 21, 504, 7235, 7255, 11350, 2]
// Exports: default

// Module 11361 (MessagePreviewReactions)
import noop from "module_19" /* 19 */;
import ConversationsStore from "ConversationsStore" /* 7668 */;
import MessagePreviewStore from "MessagePreviewStore" /* 8446 */;

const require = fn;
const jsx = fn(21).jsx;
let closure_6 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/native/MessagePreviewReactions.tsx");

export default function MessagePreviewReactions(emoji) {
  ({ channelId, messageId } = emoji);
  const items = [MessagePreviewStore, ConversationsStore];
  const items1 = [channelId, messageId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => {
    let message = MessagePreviewStore.getMessage(messageId);
    if (message == null) {
      message = ConversationsStore.getMessage(channelId, messageId);
    }
    return null != message ? message.reactions : closure_6;
  }, items1);
  const obj = channelId(504);
  const obj2 = { value: messageId(7235)(messageId(7255).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null };
  if (stateFromStores.length > 0) {
    const obj3 = { channelId, messageId, emoji: emoji.emoji, reactions: stateFromStores };
    let tmp4Result = tmp4(tmp(11350).MessageReactionsContent, obj3);
  } else {
    tmp4Result = tmp4(tmp(11350).MessageReactionsEmpty, {});
  }
  obj2.children = tmp4Result;
  return jsx(channelId(7235).AnalyticsLocationProvider, { value: messageId(7235)(messageId(7255).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null });
};
