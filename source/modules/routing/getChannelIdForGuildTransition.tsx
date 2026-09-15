// Module ID: 7324
// Function ID: 7325
// Name: getChannelIdForGuildTransition
// Dependencies: [1961, 7203, 1958, 2013, 1980, 2012, 7325, 1074, 1965, 7329, 7331, 7333, 7351, 1983, 2]
// Exports: getChannelIdForGuildTransition

// Module 7324 (getChannelIdForGuildTransition)
import FavoritesUtils from "FavoritesUtils" /* 1983 */;
import OnboardingHomeUtils from "OnboardingHomeUtils" /* 7329 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7333 */;
import VibegrationsUtils from "VibegrationsUtils" /* 7351 */;
import FavoriteStore from "FavoriteStore" /* 1961 */;
import GuildOnboardingStore from "GuildOnboardingStore" /* 7203 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import GuildChannelStore from "GuildChannelStore" /* 2013 */;
import GuildStore from "GuildStore" /* 1980 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2012 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 7325 */;

require = fn;
const ME = fn(1074).ME;
const StaticChannelRoute = fn(1965).StaticChannelRoute;
const size = fn(2);
const result = size.fileFinishedImporting("modules/routing/getChannelIdForGuildTransition.tsx");

export const getChannelIdForGuildTransition = function getChannelIdForGuildTransition(guildId) {
  const channelId = SelectedChannelStore.getChannelId(guildId);
  const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
  let id;
  if (defaultChannel != null) {
    id = defaultChannel.id;
  }
  if (id == null) {
    let tmp5;
    if (guildId === ME) {
      const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
      let first;
      if (privateChannelIds.length > 0) {
        first = privateChannelIds[0];
      }
      tmp5 = first;
    }
    id = tmp5;
  }
  if (channelId === StaticChannelRoute.GUILD_ONBOARDING) {
    if (!GuildOnboardingStore.shouldShowOnboarding(guildId)) {
      return id;
    }
  }
  if (channelId === StaticChannelRoute.GUILD_HOME) {
    if (!obj.canSeeOnboardingHome(guildId)) {
      return id;
    }
    obj = OnboardingHomeUtils;
  }
  if (channelId === StaticChannelRoute.GUILD_SPACE) {
    if (obj6.canUseGuildSpace(GuildStore.getGuild(guildId), "getChannelIdForGuildTransition")) {
      id = channelId;
    }
    return id;
  } else {
    if (channelId === tmp8.GAME_SHOP) {
      if (obj2.canSeeGameShop(guildId)) {
        return channelId;
      }
      obj2 = SlayerStorefrontUtils;
    }
    if (channelId === tmp8.VIBEGRATIONS) {
      const guild = GuildStore.getGuild(guildId);
      let tmp21 = id;
      if (null != guild) {
        tmp21 = id;
        if (obj5.canAccessVibegrations(guild, "getChannelIdForGuildTransition")) {
          tmp21 = channelId;
        }
        obj5 = VibegrationsUtils;
      }
      return tmp21;
    } else {
      const channel = ChannelStore.getChannel(channelId);
      if (null != channel) {
        if (!channel.isGuildVocal()) {
          let tmp17 = channelId;
          if (obj4.isFavoritesGuildId(guildId)) {
            tmp17 = channelId;
          }
          obj4 = FavoritesUtils;
        }
        return tmp17;
      }
      tmp17 = id;
    }
  }
};
