// Module ID: 8081
// Function ID: 8082
// Name: ChannelFollowAddSystemMessage
// Dependencies: [8035, 1114, 8037, 8039, 2]
// Exports: createChannelFollowAddSystemMessage

// Module 8081 (ChannelFollowAddSystemMessage)
import util from "util" /* 1114 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8035 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8037 */;
import createCommonMessageDefault from "createCommonMessage" /* 8039 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelFollowAddSystemMessage.tsx");

export const createChannelFollowAddSystemMessage = function createChannelFollowAddSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const obj2 = { content: null };
  const intl = util.intl;
  obj2.content = intl.formatToParts(util.t.xH8qGO, { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), webhookName: message.content, webhookNameOnClick: { action: "bindGuildMenu", messageReference: message.messageReference, medium: true } });
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj2;
};
