// Module ID: 17020
// Function ID: 17021
// Name: shared/TextChannel
// Dependencies: [19, 17, 5520, 2025, 1957, 1182, 4756, 21, 4574, 16698, 576, 16377, 7283, 504, 4727, 7899, 15349, 7343, 4996, 17021, 5021, 12089, 10141, 7893, 17023, 9578, 16265, 17017, 5137, 17024, 16697, 17018, 17019, 2]

// Module 17020 (shared/TextChannel)
import nativeDefault from "native" /* 576 */;
import ChannelItemEmbeddedActivitiesDefault from "ChannelItemEmbeddedActivities" /* 16265 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 16698 */;
import noop from "module_19" /* 19 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 5520 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const require = fn;
const View = fn(17).View;
const getThemedRippleConfig = fn(1182).getThemedRippleConfig;
const UnreadSetting = fn(4756).UnreadSetting;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4574);
let closure_12 = createStyles.createStyles(() => {
  const obj = { pressable: { flex: 1, borderRadius: getLayoutStylesDefault().container.borderRadius, marginBottom: 1 }, selectedBorder: null, rowSelected: null };
  const rect = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.radii.md };
  obj.selectedBorder = rect;
  const obj2 = { flex: 1, borderRadius: getLayoutStylesDefault().container.borderRadius, marginBottom: 1 };
  obj.rowSelected = { borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/launchpad/native/shared/TextChannel.tsx");

export default noop.memo(function TextChannel(subtitle) {
  const channel = subtitle.channel;
  let flag = subtitle.muted;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = subtitle.navigationReplace;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ selected, showGuildBadgeIcon } = subtitle);
  if (selected === undefined) {
    selected = false;
  }
  let arr4;
  dependencyMap = undefined;
  const isForumLikeChannelResult = channel.isForumLikeChannel();
  const channelUnreadBadgeState = channel(16377).useChannelUnreadBadgeState(channel, flag);
  ({ newChannel, unread, resolvedUnreadSetting, mentionCount } = channelUnreadBadgeState);
  ({ optInEnabled, isMentionLowImportance } = channelUnreadBadgeState);
  const tmp5 = closure_12(flag, unread);
  let obj = channel(16377);
  const obj2 = channel(7283);
  const items = [ActiveJoinedThreadsStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => ActiveJoinedThreadsStore.getNewThreadCount(channel.guild_id, channel.id));
  const obj3 = channel(504);
  const items1 = [ChannelStore];
  const stateFromStores1 = channel(504).useStateFromStores(items1, () => ChannelStore.getChannel(channel.parent_id));
  const tmp9 = arr4(4727)(stateFromStores1);
  const obj4 = channel(504);
  const unreadThreadsCountForParent = channel(7899).useUnreadThreadsCountForParent(channel.guild_id, channel.id);
  let tmp12 = unread;
  const tmp2Result = channel(7899);
  if (unread) {
    tmp12 = !flag;
  }
  const tmp8ResultResult = arr4(15349)(channel, { unread: tmp12 });
  const tmp8Result = arr4(15349);
  const isChannelSpoilerGated = channel(7343).useIsChannelSpoilerGated(channel);
  const tmp2Result8 = channel(7343);
  const fontScale = channel(4996).useFontScale();
  const tmp2Result9 = channel(4996);
  const items2 = [LocaleStore];
  const stateFromStores2 = channel(504).useStateFromStores(items2, () => locale.locale);
  const tmp17 = arr4(17021)();
  const tmp2Result10 = channel(504);
  ({ isSubscriptionGated, needSubscriptionToAccess } = arr4(5021)(channel.id));
  arr4 = tmp8(12089)(channel);
  if (null != tmp8ResultResult) {
    if (!isChannelSpoilerGated) {
      const obj5 = { channel, message: tmp8ResultResult, color: "text-muted", muted: flag, layout: tmp2(7893).ChannelListLayoutTypes.COMPACT };
      let result = closure_10(tmp2(10141).ChannelRowPreview, obj5);
    }
    dependencyMap = tmp22;
    const items3 = [arr4.length > 0, arr4];
    const isActivitiesInTextEnabled = tmp2(9578).useIsActivitiesInTextEnabled(channel.id);
    const memo = noop.useMemo(() => {
      let tmp = null;
      if (closure_2) {
        const obj = { embeddedApps: arr4 };
        tmp = closure_2_10(ChannelItemEmbeddedActivitiesDefault, obj);
      }
      return tmp;
    }, items3);
    const tmp2Result11 = tmp2(9578);
    const items4 = [tmp5.pressable, ];
    let rowSelected;
    if (selected) {
      rowSelected = tmp5.rowSelected;
    }
    const obj6 = { style: null, underlayColor: null, androidRippleConfig: null };
    items4[1] = rowSelected;
    obj6.style = items4;
    obj6.underlayColor = tmp17;
    const obj7 = { color: tmp17 };
    obj6.androidRippleConfig = getThemedRippleConfig(obj7);
    const tmp26 = closure_11;
    const tmp8Result4 = tmp8(17017);
    const merged = Object.assign(tmp2(17024).useTextChannelPressEvents(channel, flag2));
    const tmp2Result12 = tmp2(17024);
    const obj8 = { channel, unread, mentionCount };
    const merged1 = Object.assign(tmp2(16697).getChannelAccessibilityProps(obj8));
    if (selected) {
      const obj9 = { style: tmp5.selectedBorder, pointerEvents: "none" };
      selected = closure_10(View, obj9);
    }
    const items5 = [selected, ];
    const obj10 = { channel, channelCategoryName: tmp9, subtitle: result, hasActiveThreads: obj2.useHasActiveThreads(channel).hasActiveThreads, unreadBadge: null, mentionBadge: null, unread: null, resolvedUnreadSetting: null, mentionCount: null, muted: null, channelName: null, fontScale: null, isSubscriptionGated: null, needSubscriptionToAccess: null, showGuildBadgeIcon: null, end: null };
    const tmp2Result13 = tmp2(16697);
    const obj11 = { unread, resolvedUnreadSetting, muted: flag };
    obj10.unreadBadge = closure_10(tmp8(17018), obj11);
    const tmp8Result5 = tmp8(16697);
    if (newChannel) {
      newChannel = optInEnabled;
    }
    const obj12 = { newChannel, mentionCount, isMentionLowImportance, postsWithUnreadsCount: null, newPostCount: null, locale: null };
    let tmp38;
    if (isForumLikeChannelResult) {
      if (unreadThreadsCountForParent > 0) {
        if (!flag) {
          if (resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES) {
            tmp38 = unreadThreadsCountForParent;
          }
        }
      }
    }
    obj12.postsWithUnreadsCount = tmp38;
    let tmp40;
    if (isForumLikeChannelResult) {
      if (unreadThreadsCountForParent > 0) {
        if (!flag) {
          tmp40 = stateFromStores;
        }
      }
    }
    obj12.newPostCount = tmp40;
    obj12.locale = stateFromStores2;
    obj10.mentionBadge = tmp8(17019)(obj12);
    obj10.unread = unread;
    obj10.resolvedUnreadSetting = resolvedUnreadSetting;
    obj10.mentionCount = mentionCount;
    obj10.muted = flag;
    obj10.channelName = tmp8(4727)(channel);
    obj10.fontScale = fontScale;
    obj10.isSubscriptionGated = isSubscriptionGated;
    obj10.needSubscriptionToAccess = needSubscriptionToAccess;
    obj10.showGuildBadgeIcon = showGuildBadgeIcon;
    let tmp41 = null;
    if (isActivitiesInTextEnabled) {
      tmp41 = memo;
    }
    obj10.end = tmp41;
    items5[1] = tmp8Result5(obj10);
    obj6.children = items5;
    return tmp8Result4(tmp26(tmp2(5137).PressableHighlight, obj6));
  }
  const tmp18 = arr4(5021)(channel.id);
  result = channel(17023).renderChannelSubtitle({ subtitle: subtitle.subtitle, muted: flag, channelId: channel.id, guildId: channel.guild_id });
});
