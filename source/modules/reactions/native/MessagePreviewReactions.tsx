// Module ID: 11339
// Function ID: 11340
// Name: MessagePreviewReactions
// Dependencies: [19, 7647, 8425, 21, 504, 7214, 7234, 11328, 2]
// Exports: default

// Module 11339 (MessagePreviewReactions)
import noop from "module_19" /* 19 */;
import ConversationsStore from "ConversationsStore" /* 7647 */;
import MessagePreviewStore from "MessagePreviewStore" /* 8425 */;

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
  const obj2 = { value: messageId(7214)(messageId(7234).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null };
  if (stateFromStores.length > 0) {
    const obj3 = { channelId, messageId, emoji: emoji.emoji, reactions: stateFromStores };
    let tmp4Result = tmp4(tmp(11328).MessageReactionsContent, obj3);
  } else {
    tmp4Result = tmp4(tmp(11328).MessageReactionsEmpty, {});
  }
  obj2.children = tmp4Result;
  return jsx(channelId(7214).AnalyticsLocationProvider, { value: messageId(7214)(messageId(7234).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null });
};
