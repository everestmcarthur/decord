// Module ID: 16665
// Function ID: 16666
// Name: guild_channels/ChannelItem
// Dependencies: [19, 17, 1979, 4209, 1371, 4742, 21, 9776, 1114, 4560, 576, 10126, 504, 5584, 12195, 7641, 16444, 10915, 16663, 4713, 2]
// Exports: getChannelAccessibilityProps, renderChannelItem

// Module 16665 (guild_channels/ChannelItem)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import GuildIconDefault from "GuildIcon" /* 5584 */;
import NotificationCenterUtils from "NotificationCenterUtils" /* 7641 */;
import getChannelA11yLabelDefault from "getChannelA11yLabel" /* 9776 */;
import ChannelListLayout from "ChannelListLayout" /* 10126 */;
import ChannelWrapper from "ChannelWrapper" /* 16444 */;
import ChannelContent from "ChannelContent" /* 16663 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

const GroupDMAvatarDefault = tmp12(10915);
require = fn;
function LaunchpadChannelIcon(channel) {
  channel = channel.channel;
  const layout = channel.layout;
  const tmp = closure_11(layout);
  const layoutStyles = channel(10126).getLayoutStyles(layout);
  const obj = channel(10126);
  const items = [GuildStore];
  const obj3 = { style: tmp.guildBadgeIcon, children: null };
  const stateFromStores = channel(504).useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
  obj3.children = closure_8(GuildIconDefault, { guild: stateFromStores, size: layoutStyles.icon.guildBadgeIconSize });
  const items1 = [closure_8(View, obj3), ];
  const obj5 = { channel, size: null, wrapperSize: null };
  const obj2 = channel(504);
  const obj4 = { guild: stateFromStores, size: layoutStyles.icon.guildBadgeIconSize };
  const tmp6 = closure_10;
  const tmp7 = closure_9;
  const tmp8 = closure_8;
  let str = "sm";
  if (obj6.isLayoutCozy(layout)) {
    str = "md";
  }
  obj5.size = str;
  obj6 = channel(10126);
  let num = 32;
  if (tmp2Result.isLayoutCozy(layout)) {
    num = 48;
  }
  const obj7 = { children: null };
  obj5.wrapperSize = num;
  items1[1] = tmp8(channel(12195).ChannelIcon, obj5);
  obj7.children = items1;
  return tmp6(tmp7, obj7);
}
const View = fn(17).View;
const UnreadSetting = fn(4742).UnreadSetting;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles((layout) => {
  const guildBadgeIcon = { position: "absolute", zIndex: 1, bottom: -4, right: -4, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 2, borderRadius: null };
  let num = 6;
  if (obj2.isLayoutCozy(layout)) {
    num = 9;
  }
  guildBadgeIcon.borderRadius = num;
  return { guildBadgeIcon };
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelItem.tsx");

export const getChannelAccessibilityProps = function getChannelAccessibilityProps(channel) {
  channel = channel.channel;
  ({ unread, mentionCount, voiceStates, embeddedActivitiesCount } = channel);
  if (channel.isGuildVoice()) {
    const obj2 = { accessibilityHint: null };
    const intl = util.intl;
    obj2.accessibilityHint = intl.string(util.t["9C444m"]);
    const tmp2 = obj2;
  }
  const merged = Object.assign(tmp2);
  return { accessible: true, accessibilityRole: "button", accessibilityLabel: getChannelA11yLabelDefault({ channel, unread, mentionCount, voiceStates, embeddedActivitiesCount }) };
};
export const renderChannelItem = function renderChannelItem(unread) {
  ({ channel, locked } = unread);
  ({ subtitle, unreadBadge, mentionBadge } = unread);
  if (locked === undefined) {
    locked = false;
  }
  let flag = unread.unread;
  if (flag === undefined) {
    flag = false;
  }
  let ONLY_MENTIONS = unread.resolvedUnreadSetting;
  if (ONLY_MENTIONS === undefined) {
    ONLY_MENTIONS = UnreadSetting.ONLY_MENTIONS;
  }
  let flag2 = unread.live;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = unread.muted;
  if (flag3 === undefined) {
    flag3 = false;
  }
  ({ latestMessageTimestamp, layout, end, channelName, isSubscriptionGated, connected, mentionCount, launchpad, fontScale } = unread);
  if (isSubscriptionGated === undefined) {
    isSubscriptionGated = false;
  }
  let flag4 = unread.needSubscriptionToAccess;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let panelVariant = unread.panelVariant;
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let relativeTimestamp = null;
  if (null != latestMessageTimestamp) {
    relativeTimestamp = null;
    if (!flag3) {
      relativeTimestamp = NotificationCenterUtils.getRelativeTimestamp(latestMessageTimestamp);
    }
  }
  const layoutStyles = ChannelListLayout.getLayoutStyles(layout);
  const children = [unreadBadge, , , ];
  const obj4 = { style: null, children: null };
  const obj3 = ChannelWrapper;
  const obj5 = { position: "relative", borderRadius: nativeDefault.radii.round, justifyContent: "center", alignItems: "center", flexShrink: 0, flexGrow: 0 };
  const tmp8 = closure_1_10;
  const tmp9 = React7;
  const merged = Object.assign(ChannelListLayout.makeSizeStyle(layoutStyles.icon.wrapper.size));
  const merged1 = Object.assign(layoutStyles.icon.margin);
  obj4.style = obj5;
  if (channel.isGroupDM()) {
    const obj7 = { channel, size: layoutStyles.icon.avatarSize };
    let tmp10Result = tmp10(GroupDMAvatarDefault, obj7);
  } else {
    const obj8 = { channel, layout };
    tmp10Result = tmp10(LaunchpadChannelIcon, obj8);
  }
  obj4.children = tmp10Result;
  children[1] = React6(View, obj4);
  const obj9 = { layout, name: null, subtitle: null, unread: null, resolvedUnreadSetting: null, muted: null, lastMessageTimestampString: null, channel: null, locked: null, connected: null, live: null, mentionCount: null, mentionBadge: null, isSubscriptionGated: null, needSubscriptionToAccess: null };
  if (channelName == null) {
    channelName = tmp5(4713).computeChannelName(channel, UserStore, RelationshipStore);
    const tmp5Result2 = tmp5(4713);
  }
  obj9.name = channelName;
  obj9.subtitle = subtitle;
  obj9.unread = flag;
  obj9.resolvedUnreadSetting = ONLY_MENTIONS;
  obj9.muted = flag3;
  obj9.lastMessageTimestampString = relativeTimestamp;
  obj9.channel = channel;
  obj9.locked = locked;
  obj9.connected = connected;
  obj9.live = flag2;
  obj9.mentionCount = mentionCount;
  obj9.mentionBadge = mentionBadge;
  obj9.isSubscriptionGated = isSubscriptionGated;
  obj9.needSubscriptionToAccess = flag4;
  children[2] = ChannelContent.renderChannelContent(obj9);
  let tmp10Result2 = null;
  if (null != end) {
    const obj10 = { style: { paddingLeft: 8 }, children: end };
    tmp10Result2 = tmp10(tmp11, obj10);
  }
  children[3] = tmp10Result2;
  return obj3.renderChannelWrapper(tmp8(tmp9, { children }), { channel, layout, launchpad, fontScale, panelVariant });
};
