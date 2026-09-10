// Module ID: 8294
// Function ID: 8295
// Name: ApplicationPresenceUtils
// Dependencies: [1957, 2]
// Exports: shouldDisableUserPresenceInChannel

// Module 8294 (ApplicationPresenceUtils)
import ChannelStore from "ChannelStore" /* 1957 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/ApplicationPresenceUtils.tsx");

export const shouldDisableUserPresenceInChannel = function shouldDisableUserPresenceInChannel(bot, channelId) {
  const channel = ChannelStore.getChannel(channelId);
  let tmp = null != channel && bot.bot && channel.isPrivate();
  if (tmp) {
    const rawRecipients = channel.rawRecipients;
    tmp = null == rawRecipients.find((id) => id.id === bot.id);
  }
  return tmp;
};
