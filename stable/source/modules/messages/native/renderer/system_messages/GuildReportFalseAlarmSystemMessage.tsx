// Module ID: 8041
// Function ID: 8042
// Name: GuildReportFalseAlarmSystemMessage
// Dependencies: [1957, 7954, 7961, 8033, 7963, 8034, 7965, 1114, 1399, 1396, 2]
// Exports: createGuildReportFalseAlarmSystemMessage

// Module 8041 (GuildReportFalseAlarmSystemMessage)
import util from "util" /* 1114 */;
import AvatarUtils from "AvatarUtils" /* 1396 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1399 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 7954 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7961 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7963 */;
import createCommonMessageDefault from "createCommonMessage" /* 7965 */;
import GuildAlertModeSystemMessage from "GuildAlertModeSystemMessage" /* 8033 */;
import getTagPropertiesDefault from "getTagProperties" /* 8034 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildReportFalseAlarmSystemMessage.tsx");

export const createGuildReportFalseAlarmSystemMessage = function createGuildReportFalseAlarmSystemMessage(roleStyle) {
  ({ message, theme } = roleStyle);
  const channel = ChannelStore.getChannel(message.channel_id);
  const tmp2 = resolveMessageContentColorsDefault(theme);
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  let automodUsernameColor = GuildAlertModeSystemMessage.resolveAlertModeColors(theme).automodUsernameColor;
  const obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  const obj4 = {};
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  const intl = util.intl;
  obj4.content = intl.formatToParts(util.t["21+uW4"], obj3);
  const intl2 = util.intl;
  obj4.username = intl2.string(util.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj4.usernameColor = automodUsernameColor;
  const tmp7 = getTagPropertiesDefault({ message, channel, isSystemDM: true, colors: tmp2 });
  const tmp4Result = utils_AvatarUtils;
  const tmp4Result3 = AvatarUtils;
  obj4.avatarURL = tmp4Result.ensureAvatarSource(tmp4Result3.makeSource(utils_AvatarUtils.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp7);
  return obj4;
};
