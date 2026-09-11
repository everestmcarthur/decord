// Module ID: 8103
// Function ID: 8104
// Name: StageTopicSystemMessage
// Dependencies: [8035, 1114, 8037, 8039, 2]
// Exports: createStageTopicSystemMessage

// Module 8103 (StageTopicSystemMessage)
import util from "util" /* 1114 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8035 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8037 */;
import createCommonMessageDefault from "createCommonMessage" /* 8039 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageTopicSystemMessage.tsx");

export const createStageTopicSystemMessage = function createStageTopicSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const obj2 = { content: null };
  const intl = util.intl;
  obj2.content = intl.formatToParts(util.t.ro3RM0, { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), topic: message.content });
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj2;
};
