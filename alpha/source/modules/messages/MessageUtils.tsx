// Module ID: 10328
// Function ID: 10329
// Name: MessageUtils
// Dependencies: [1958, 1372, 4933, 2]
// Exports: canViewPotentiallyNSFWChannel, getGuildIdFromMessage

// Module 10328 (MessageUtils)
import AgeGateUtils from "AgeGateUtils" /* 4933 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/MessageUtils.tsx");

export const canViewPotentiallyNSFWChannel = function canViewPotentiallyNSFWChannel(channel_id) {
  const currentUser = UserStore.getCurrentUser();
  const channel = ChannelStore.getChannel(channel_id);
  let tmp3 = null != currentUser && null != channel;
  if (tmp3) {
    tmp3 = !AgeGateUtils.isChannelContentGated(channel);
  }
  return tmp3;
};
export const getGuildIdFromMessage = function getGuildIdFromMessage(channel_id) {
  const channel = ChannelStore.getChannel(channel_id.channel_id);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  return guild_id;
};
