// Module ID: 11413
// Function ID: 11414
// Name: MessagePreviewReactions
// Dependencies: [19, 7704, 8490, 21, 504, 7272, 7292, 11402, 2]
// Exports: default

// Module 11413 (MessagePreviewReactions)
import noop from "module_19" /* 19 */;
import ConversationsStore from "ConversationsStore" /* 7704 */;
import MessagePreviewStore from "MessagePreviewStore" /* 8490 */;

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
  const obj2 = { value: messageId(7272)(messageId(7292).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null };
  if (stateFromStores.length > 0) {
    const obj3 = { channelId, messageId, emoji: emoji.emoji, reactions: stateFromStores };
    let tmp4Result = tmp4(tmp(11402).MessageReactionsContent, obj3);
  } else {
    tmp4Result = tmp4(tmp(11402).MessageReactionsEmpty, {});
  }
  obj2.children = tmp4Result;
  return jsx(channelId(7272).AnalyticsLocationProvider, { value: messageId(7272)(messageId(7292).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null });
};
