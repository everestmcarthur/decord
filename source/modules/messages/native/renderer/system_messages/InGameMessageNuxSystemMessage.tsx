// Module ID: 8120
// Function ID: 8121
// Name: InGameMessageNuxSystemMessage
// Dependencies: [4835, 1074, 8028, 8035, 8037, 2024, 1114, 8039, 2]
// Exports: createInGameMessageNuxSystemMessage

// Module 8120 (InGameMessageNuxSystemMessage)
import util from "util" /* 1114 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 8028 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8035 */;
import ApplicationStore from "ApplicationStore" /* 4835 */;

require = fn;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/InGameMessageNuxSystemMessage.tsx");

export const createInGameMessageNuxSystemMessage = function createInGameMessageNuxSystemMessage(message) {
  message = message.message;
  ({ theme, roleStyle } = message);
  let str = message.applicationId;
  if (str == null) {
    str = "";
  }
  const application = ApplicationStore.getApplication(str);
  if (null == application) {
    return null;
  } else {
    const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
    const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: null, gameName: null, urlOnClick: null };
    const obj3 = { message, author: messageAuthorWithProcessedColor, roleStyle };
    obj2.usernameOnClick = tmp(8037)(obj3);
    obj2.gameName = application.name;
    const obj4 = { action: "bindOpenUrl", url: null, linkColor: null, medium: true };
    obj4.url = tmp(2024).getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS);
    obj4.linkColor = tmp3.linkColor;
    obj2.urlOnClick = obj4;
    const obj5 = { content: null };
    const intl = util.intl;
    obj5.content = intl.formatToParts(util.t["92erOB"], obj2);
    const merged = Object.assign(tmp(8039)(message));
    return obj5;
  }
  tmp3 = resolveMessageContentColorsDefault(theme);
};
