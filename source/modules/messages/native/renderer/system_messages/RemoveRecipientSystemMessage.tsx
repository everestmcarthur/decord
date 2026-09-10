// Module ID: 7992
// Function ID: 7993
// Name: RemoveRecipientSystemMessage
// Dependencies: [1961, 1957, 1371, 7974, 7976, 1114, 7978, 2]
// Exports: createRemoveRecipientSystemMessage

// Module 7992 (RemoveRecipientSystemMessage)
import ChannelRecord from "ChannelRecord" /* 1961 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7974 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7976 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import UserStore from "UserStore" /* 1371 */;
import size from "module_2" /* 2 */;

const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/RemoveRecipientSystemMessage.tsx");

export const createRemoveRecipientSystemMessage = function createRemoveRecipientSystemMessage(message) {
  ({ message, roleStyle } = message);
  const first = message.mentions[0];
  const channel = ChannelStore.getChannel(message.channel_id);
  let hasItem = null != channel;
  if (hasItem) {
    hasItem = THREAD_CHANNEL_TYPES.has(channel.type);
  }
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }) };
  if (message.author.id === first) {
    const intl = tmp5(1114).intl;
    const formatToParts = intl.formatToParts;
    const t = tmp5(1114).t;
    if (hasItem) {
      let formatToPartsResult = formatToParts(t.uHmblj, obj2);
    } else {
      formatToPartsResult = formatToParts(t["Qn5+Lf"], obj2);
    }
    const obj3 = { content: formatToPartsResult };
    const merged = Object.assign(tmp8(7978)(message));
    return obj3;
  } else {
    const user = UserStore.getUser(first);
    const userAuthorWithProcessedColor = tmp5(7974).getUserAuthorWithProcessedColor(user, channel);
    const obj4 = {};
    const merged1 = Object.assign(obj2);
    obj4.otherUsername = userAuthorWithProcessedColor.nick;
    const obj5 = { userId: first, message, author: userAuthorWithProcessedColor, roleStyle };
    obj4.otherUsernameOnClick = tmp8(7976)(obj5);
    const intl2 = tmp5(1114).intl;
    const formatToParts2 = intl2.formatToParts;
    const t2 = tmp5(1114).t;
    if (hasItem) {
      let formatToParts2Result = formatToParts2(t2.KBrM5t, obj4);
    } else {
      formatToParts2Result = formatToParts2(t2.QtZ0RD, obj4);
    }
    const obj6 = { content: formatToParts2Result };
    const merged2 = Object.assign(tmp8(7978)(message));
    return obj6;
  }
};
