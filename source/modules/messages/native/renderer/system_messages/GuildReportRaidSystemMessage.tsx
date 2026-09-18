// Module ID: 8259
// Function ID: 8260
// Name: GuildReportRaidSystemMessage
// Dependencies: [1958, 1980, 8172, 8179, 8252, 8181, 8253, 8183, 1115, 1400, 1397, 2]
// Exports: createGuildReportRaidSystemMessage

// Module 8259 (GuildReportRaidSystemMessage)
import util from "util" /* 1115 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1400 */;
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 8172 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8179 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8181 */;
import GuildAlertModeSystemMessage from "GuildAlertModeSystemMessage" /* 8252 */;
import getTagPropertiesDefault from "getTagProperties" /* 8253 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import GuildStore from "GuildStore" /* 1980 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildReportRaidSystemMessage.tsx");

export const createGuildReportRaidSystemMessage = function createGuildReportRaidSystemMessage(roleStyle) {
  ({ message, theme } = roleStyle);
  const channel = ChannelStore.getChannel(message.channel_id);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const guild = GuildStore.getGuild(guild_id);
  const tmp3 = resolveMessageContentColorsDefault(theme);
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  let automodUsernameColor = GuildAlertModeSystemMessage.resolveAlertModeColors(theme).automodUsernameColor;
  const obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), guildName: null };
  let str;
  if (guild != null) {
    str = guild.name;
  }
  if (str == null) {
    str = "";
  }
  obj3.guildName = str;
  const obj4 = {};
  const merged = Object.assign(tmp(8183)(roleStyle));
  const intl = tmp8(1115).intl;
  obj4.content = intl.formatToParts(util.t["MTmH+u"], obj3);
  const intl2 = tmp8(1115).intl;
  obj4.username = intl2.string(util.t.hG1StD);
  if (automodUsernameColor == null) {
    automodUsernameColor = null;
  }
  obj4.usernameColor = automodUsernameColor;
  const tmp11 = getTagPropertiesDefault({ message, channel, isSystemDM: true, colors: tmp3 });
  const tmp8Result = utils_AvatarUtils;
  const tmp8Result3 = AvatarUtils;
  obj4.avatarURL = tmp8Result.ensureAvatarSource(tmp8Result3.makeSource(utils_AvatarUtils.getAutomodAvatarURL())).uri;
  const merged1 = Object.assign(tmp11);
  return obj4;
};
