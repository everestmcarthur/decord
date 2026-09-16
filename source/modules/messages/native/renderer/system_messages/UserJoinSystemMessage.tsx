// Module ID: 8101
// Function ID: 8102
// Name: UserJoinSystemMessage
// Dependencies: [1958, 1980, 1074, 8076, 8102, 8113, 8114, 8117, 1115, 8078, 8080, 2]
// Exports: createUserJoinSystemMessage

// Module 8101 (UserJoinSystemMessage)
import util from "util" /* 1115 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8076 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8078 */;
import SystemMessageUtilsDefault from "SystemMessageUtils" /* 8102 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import GuildStore from "GuildStore" /* 1980 */;

require = fn;
const SystemChannelFlags = fn(1074).SystemChannelFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx");

export const createUserJoinSystemMessage = function createUserJoinSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const channel = ChannelStore.getChannel(message.getChannelId());
  let guildId;
  const systemMessageUserJoinMobile = SystemMessageUtilsDefault.getSystemMessageUserJoinMobile(message.id);
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  let transformStickerResult;
  if (null != guildId) {
    if (null != channel) {
      const guild = GuildStore.getGuild(guildId);
      let tmp10 = null != guild;
      if (tmp10) {
        tmp10 = !(guild.systemChannelFlags & SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES);
      }
      const tmpResult = tmp(8113);
      if (tmpResult.computeIsStickerReplyEnabled(guildId, channel, message, tmp10)) {
        const tmpResult3 = tmp(8114);
        transformStickerResult = tmpResult3.transformSticker(tmp(8117).pickWelcomeSticker(message.id));
        const tmpResult4 = tmp(8117);
      }
    }
  }
  const obj2 = { content: null, sticker: null, stickerLabel: null };
  const intl = tmp(1115).intl;
  obj2.content = intl.formatToParts(systemMessageUserJoinMobile, { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) });
  obj2.sticker = transformStickerResult;
  const intl2 = tmp(1115).intl;
  obj2.stickerLabel = intl2.string(util.t["7Tj6HT"]);
  const merged = Object.assign(tmp4(8080)(roleStyle));
  return obj2;
};
