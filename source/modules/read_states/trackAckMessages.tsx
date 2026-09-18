// Module ID: 14047
// Function ID: 14048
// Name: trackAckMessages
// Dependencies: [1958, 7832, 1980, 4903, 1074, 4902, 2]
// Exports: default

// Module 14047 (trackAckMessages)
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4902 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7832 */;
import GuildStore from "GuildStore" /* 1980 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4903 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/read_states/trackAckMessages.tsx");

export default function trackAckMessages(channel_id, location) {
  const channel = ChannelStore.getChannel(channel_id);
  const obj = { channel_id, guild_id: null, location: null, guild_unread_statuses: null };
  let guildId;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  obj.guild_id = guildId;
  obj.location = location;
  const guildsArray = GuildStore.getGuildsArray();
  obj.guild_unread_statuses = guildsArray.map((id) => {
    const mentionCount = GuildReadStateStore.getMentionCount(id.id);
    const hasUnreadResult = GuildReadStateStore.hasUnread(id.id);
    return "" + id.id + "," + hasUnreadResult + "," + mentionCount + "," + UserGuildSettingsStore.isMuted(id.id) + "," + UserGuildSettingsStore.resolveGuildUnreadSetting(id);
  });
  AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.ACK_MESSAGES, obj);
};
