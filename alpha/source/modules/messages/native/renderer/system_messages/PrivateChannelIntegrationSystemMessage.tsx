// Module ID: 8289
// Function ID: 8290
// Name: PrivateChannelIntegrationSystemMessage
// Dependencies: [1074, 8217, 8219, 8253, 8221, 2]
// Exports: createPrivateChannelIntegrationSystemMessage

// Module 8289 (PrivateChannelIntegrationSystemMessage)
import Constants from "Constants" /* 1074 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8217 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8219 */;
import createCommonMessageDefault from "createCommonMessage" /* 8221 */;
import size from "module_2" /* 2 */;

const MessageTypes = Constants.MessageTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/PrivateChannelIntegrationSystemMessage.tsx");

export const createPrivateChannelIntegrationSystemMessage = function createPrivateChannelIntegrationSystemMessage(roleStyle, type) {
  const message = roleStyle.message;
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const tmp5 = formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  const application = message.application;
  let bot;
  if (application != null) {
    bot = application.bot;
  }
  if (null != bot) {
    const obj2 = { action: "bindUserMenu", userId: application.bot.id, messageChannelId: message.channel_id, medium: true };
  }
  if (type === MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED) {
    const obj3 = { application, username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp5, applicationNameOnClick: tmp7 };
    let privateChannelIntegrationAddedSystemMessageASTContent = tmp(8253).getPrivateChannelIntegrationAddedSystemMessageASTContent(obj3);
    const tmpResult = tmp(8253);
  } else {
    const obj4 = { application, username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp5, applicationNameOnClick: tmp7 };
    privateChannelIntegrationAddedSystemMessageASTContent = tmp(8253).getPrivateChannelIntegrationRemovedSystemMessageASTContent(obj4);
    const tmpResult2 = tmp(8253);
  }
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return { content: privateChannelIntegrationAddedSystemMessageASTContent };
};
