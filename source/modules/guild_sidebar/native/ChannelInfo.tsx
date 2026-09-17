// Module ID: 16387
// Function ID: 16388
// Name: ChannelInfo
// Dependencies: [19, 7646, 1980, 4278, 4655, 4659, 1074, 21, 4640, 504, 12210, 8007, 16388, 16389, 4786, 1177, 16391, 16392, 16278, 5505, 12446, 16279, 16393, 13163, 2]
// Exports: default

// Module 16387 (ChannelInfo)
import StageMediaHooks from "StageMediaHooks" /* 5505 */;
import useEmbeddedAppsForChannelDefault from "useEmbeddedAppsForChannel" /* 12210 */;
import showChannelBadgeDefault from "showChannelBadge" /* 16388 */;
import useVoiceChannelStartTime from "useVoiceChannelStartTime" /* 16393 */;
import noop from "module_19" /* 19 */;
import NewChannelsStore from "NewChannelsStore" /* 7646 */;
import GuildStore from "GuildStore" /* 1980 */;
import PermissionStore from "PermissionStore" /* 4278 */;
import ReadStateStore from "ReadStateStore" /* 4655 */;
import VoiceStateStore from "VoiceStateStore" /* 4659 */;

const Badges = tmp2(13163);
require = fn;
function LimitAndDurationInfo(channel) {
  channel = channel.channel;
  ({ voiceStatesCount, selected } = channel);
  const items = [VoiceStateStore, PermissionStore];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items, () => {
    let isGuildStageVoiceResult = channel.isGuildStageVoice();
    if (isGuildStageVoiceResult) {
      isGuildStageVoiceResult = StageMediaHooks.getStageHasMedia(tmp.id);
    }
    const hasVideoResult = VoiceStateStore.hasVideo(channel.id);
    return { isLocked: !PermissionStore.can(constants2.CONNECT, channel), hasVideo: VoiceStateStore.hasVideo(channel.id), hasMedia: isGuildStageVoiceResult };
  });
  ({ hasVideo, hasMedia } = stateFromStoresObject);
  const obj2 = { channel, locked: stateFromStoresObject.isLocked, video: null, selected: null };
  let tmp5 = hasVideo;
  let obj = channel(504);
  const tmp = channel;
  if (!hasVideo) {
    tmp5 = hasMedia;
  }
  obj2.video = tmp5;
  obj2.selected = selected;
  if (tmp4(obj2)) {
    const obj3 = { userCount: voiceStatesCount, video: null, channel: null };
    if (!hasVideo) {
      hasVideo = hasMedia;
    }
    obj3.video = hasVideo;
    obj3.channel = channel;
    let tmp6Result = tmp6(tmp(16279).ConnectedUserLimit, obj3);
  } else {
    const obj4 = { channel };
    tmp6Result = tmp6(DurationInfo, obj4);
  }
  return tmp6Result;
}
function DurationInfo(channel) {
  const tmp = closure_11();
  const startTime = useVoiceChannelStartTime.useStartTime(channel.channel);
  let tmp5 = null;
  if (null != startTime) {
    const obj2 = { entry: null, style: null };
    const obj3 = { start: startTime };
    obj2.entry = obj3;
    obj2.style = tmp.activeTimestamp;
    tmp5 = jsx(Badges.ActiveTimestamp, { entry: null, style: null });
  }
  return tmp5;
}
const Constants = fn(1074);
({ GuildFeatures: closure_8, Permissions: closure_9, Fonts } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4640);
let closure_11 = createStyles.createStyles({ activeTimestamp: { fontFamily: Fonts.CODE_NORMAL, fontSize: 12, lineHeight: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/ChannelInfo.tsx");

export default function ChannelInfo(channel) {
  channel = channel.channel;
  ({ isChannelCollapsed, voiceStates, enableConnectedUserLimit, enableActivities, muted, isSubscriptionGated, needSubscriptionToAccess } = channel);
  const items = [GuildStore, ReadStateStore, NewChannelsStore];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items, () => ({ guild: GuildStore.getGuild(channel.guild_id), mentionsCount: ReadStateStore.getMentionCount(channel.id), isMentionLowImportance: ReadStateStore.getIsMentionLowImportance(channel.id), isNewChannel: NewChannelsStore.shouldIndicateNewChannel(channel.guild_id, channel.id) }));
  ({ guild, mentionsCount, isNewChannel } = stateFromStoresObject);
  const tmp5 = useEmbeddedAppsForChannelDefault(channel);
  const obj = channel(504);
  const postsWithUnreadsCount = channel(8007).useUnreadThreadsCountForParent(channel.guild_id, channel.id);
  if (showChannelBadgeDefault({ mentionsCount, isNewChannel, postsWithUnreadsCount, muted })) {
    const obj3 = { mentionCount: mentionsCount, isMentionLowImportance: stateFromStoresObject.isMentionLowImportance, isNewChannel, postsWithUnreadsCount: null, muted: null };
    let tmp18 = null;
    if (channel.isForumLikeChannel()) {
      tmp18 = postsWithUnreadsCount;
    }
    obj3.postsWithUnreadsCount = tmp18;
    obj3.muted = muted;
    let tmp11Result = jsx(tmp4(16389), { mentionCount: mentionsCount, isMentionLowImportance: stateFromStoresObject.isMentionLowImportance, isNewChannel, postsWithUnreadsCount: null, muted: null });
    const tmp4Result = tmp4(16389);
  } else {
    if (null != isChannelCollapsed) {
      if (isChannelCollapsed) {
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(constants.COMMUNITY);
        }
        if (hasItem) {
          if (tmpResult.hasStream(voiceStates)) {
            tmp11Result = jsx(tmp(1177).LiveTag, {});
          }
          tmpResult = tmp(4786);
        }
      }
    }
    if (null != enableActivities) {
      if (enableActivities) {
        if (tmpResult2.showChannelItemEmbeddedActivities(tmp5)) {
          const obj4 = { embeddedApps: tmp5, muted };
          tmp11Result = jsx(tmp4(16392), { embeddedApps: tmp5, muted });
        }
        tmpResult2 = tmp(16391);
      }
    }
    if (null != isSubscriptionGated) {
      if (null != needSubscriptionToAccess) {
        if (isSubscriptionGated) {
          const obj5 = { locked: needSubscriptionToAccess };
          tmp11Result = jsx(tmp4(16278), { locked: needSubscriptionToAccess });
        }
      }
    }
    tmp11Result = null;
    if (null != enableConnectedUserLimit) {
      tmp11Result = null;
      if (enableConnectedUserLimit) {
        const obj6 = { channel, voiceStatesCount: null, selected: null };
        let num;
        if (voiceStates != null) {
          num = voiceStates.length;
        }
        if (num == null) {
          num = 0;
        }
        obj6.voiceStatesCount = num;
        obj6.selected = channel.isChannelSelected;
        tmp11Result = <LimitAndDurationInfo channel={channel} voiceStatesCount={null} selected={null} />;
      }
    }
  }
  return tmp11Result;
};
